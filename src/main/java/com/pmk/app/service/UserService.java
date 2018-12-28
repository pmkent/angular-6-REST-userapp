package com.pmk.app.service;

import com.pmk.app.dao.IUserRepository;
import com.pmk.app.dao.IUserRoleRepository;
import com.pmk.app.model.Credentials;
import com.pmk.app.model.User;
import com.pmk.app.model.UserRole;
import com.pmk.app.util.PasswordUtil;
import com.pmk.app.util.TokenUtil;

import java.util.*;
import javax.ws.rs.core.UriInfo;

/*
 * Created by phil on 1/14/2018.
 */
public class UserService {

    private String TOKEN;

    private IUserRepository iUserRepo;
    private IUserRoleRepository iUsrRoleRepo;

    public UserService(IUserRepository userRepo, IUserRoleRepository roleRepo) {
        this.iUserRepo = userRepo;
        this.iUsrRoleRepo = roleRepo;
    }

    /* */
    public List<User> getUsers(String jwt) {
        System.out.println("\n\nUsrSvc:getUsers : getUsers "+jwt+"\n");
        this.TOKEN = jwt.replaceAll("Bearer ", "");

        if (TokenUtil.validateToken(this.TOKEN) == null)
            return null;

        // Now, add all user roles to each user
        List<User> allUsers = new ArrayList<>();
        for (User user : iUserRepo.fetchAll()) {
            user.setRoles(getUserRoles(user.getUsername()));  // TODO MAJOR change email to username
            allUsers.add(user);
        }
        System.out.println("\nUsrSvc:getUsers() User[] size : " + allUsers.size() + " token >" + this.TOKEN + "<");

        String email = TokenUtil.getUserEmailFromToken(this.TOKEN);
        Set<String> roles = getUserRoles(email);
        System.out.println("\nUsrSvc:getUsers: " + email + " Roles : " + roles + " \n");

        List<User> errorUser;
        if ((email != null) && (roles != null)) {
            //System.out.println("\nUsrSvc:getUsers: inside loop");
            if (roles.contains("ADMIN")) return allUsers;
            else if (roles.contains("USER")) {
                //System.out.println("\nUsrSvc:getUsers: inside roles contains user");
                errorUser = new ArrayList<>();
                for (User user : allUsers) {
                    if (!user.getRoles().contains("ADMIN"))
                        errorUser.add(user);
                }
                System.out.println("\nUsrSvc:getUsers: inside roles returning errorUser "+errorUser);
                return errorUser;
            } else {
                errorUser = new ArrayList<>();
                errorUser.add(getUserFromEmail(email));
                return errorUser;
            }
        } else {
            System.out.println("\nUsrSvc: ERROR no roles for " + email + "\n");
            errorUser = new ArrayList<>();
            errorUser.add(new User(0, "Nouser", "Found", "nouser@found.com", "bc4c44979100772732ae8c67128802ea8952767d"));//, new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }
    } // end: getUsers() method.

    /* 2018-12-23 */
    private User getLoggedInUser() {
        System.out.println("\n\nUsrSvc:getLoggedInUser() Logged-In user, token "+this.TOKEN+"\n");
        if (this.TOKEN == null) return null; // BUG FIX [WARNING] /api/user java.lang.IllegalArgumentException: JWT String argument cannot be null or empty.

        String email = TokenUtil.getUserEmailFromToken(this.TOKEN);
        User user = getUserFromEmail(email);
        System.out.println("\nUsrSvc:getLoggedInUser() Logged-In user : "+user+"\n");
        return user;
    } // end: getLoggedInUser() method.

    /**/
    public User addUser(User user) {
        System.out.println("\nUsrSvc:addUser : " + user.getUsername() +"\n");

        if (iUserRepo.findUserByUsername(user.getUsername()) != null) {
            System.out.println("UsrSvc:addUser OOPS! username: "+user.getUsername()+" Exists in the database!!");
            return null;
        } else System.out.println("UsrSvc:addUser adding new user, username: "+user.getUsername());

        if (iUserRepo.fetchOne(String.valueOf(user.getUserId())) == null) { // Only update userId for new users
            TreeSet<Integer> usrIdSet = new TreeSet<>();
            for (User usr : iUserRepo.fetchAll()) {
                usrIdSet.add(usr.getUserId());
            }
            int maxUsrId = usrIdSet.last() + 1;
            System.out.println("last " + maxUsrId + " set: " + usrIdSet+" userId "+user.getUserId());
            user.setUserId(maxUsrId);
        } else System.out.println("\n\nUsrSvc:addUser OOPS trying to add EXISTING user, userId: "+user.getUserId()+". \n\n");

        user.setPassword(PasswordUtil.getPasswordHash(user.getPassword()));

        Date today = new Date();
        user.setCreateDt(today);
        user.setUpdateDt(today);
        User loggedInUsr = getLoggedInUser();
        if (loggedInUsr != null)
            user.setUpdateBy(loggedInUsr.getUsername());
        else user.setUpdateBy("UNKNOWN-USER");

        user.setRoles(null); // 2018-12-24 TODO test this

        iUserRepo.upsert(user);
        System.out.println("UsrSvc:addUser DONE adding user : "+user+"\n");
        return user;
    } // end: addUser() method

    /**/
    public void updateUser(User user) {
        System.out.println("UsrSvc:updateUser : " + user.getUsername());
        Date today = new Date();

        if (user.getPassword().length() < 20) // TODO Test. Don't update database with Hash
            user.setPassword(PasswordUtil.getPasswordHash(user.getPassword()));

        user.setUpdateDt(today);
        User loggedInUsr = getLoggedInUser();
        if (loggedInUsr != null)
            user.setUpdateBy(loggedInUsr.getUsername());
        else user.setUpdateBy("UNKNOWN-USER");

        user.setRoles(null); // 2018-12-24 TODO test this

        iUserRepo.upsert(user);

        System.out.println("UsrSvc:updateUser DONE updating user : "+user);
    }

    /* */
    public void deleteUser(String userId) {
        System.out.println("UsrSvc:deleteUser userId : " + userId);
        iUserRepo.delete(userId);
        System.out.println("UsrSvc:deleteUser DONE deleting userId : " + userId);
    }

    // User Authentication

    /**/
    public User authenticate(String userInfo, UriInfo uriInfo) {
        System.out.println("\nUsrSvc:authenticate() userInfo " + userInfo + " uriInfo : " + uriInfo);
        Credentials credentials = TokenUtil.extractCredentials(userInfo);
        User user = iUserRepo.login(credentials.getUsername(), credentials.getPassword().toCharArray());
        if (user != null) {
            user.setToken(TokenUtil.issueToken(credentials.getUsername(), uriInfo));
            System.out.println("\nUsrSvc:authenticateUser() LOGIN SUCCESS! Logged in as : \n" + user);
            return user;
        }
        System.out.println("\nUsrSvc:authenticate() LOGIN FAILED! Logged in as : " + credentials + " \n");
        return null;
    } // end: authenticate() method

    /**
     * public User authenticate(User user) {
     * return iUserRepo.login(user.getUsername(), user.getPassword().toCharArray());
     * } // end: authenticate() method
     * <p>
     * /* TODO Change to getUserByUserId accordingly or Remove completely and use the repo method
     */
    public User getUserByUserId(String userId) {
        User usr = iUserRepo.fetchOne(userId);
        if (usr != null) usr.setRoles(getUserRoles(usr.getUsername()));
        System.out.println("\nUsrSvc:getUserByUserId() userId " + userId + " Usr: " + usr);
        return usr;
    }

    /* 2018-12-16 */
    private Set<String> getUserRoles(String email) {
        Set<String> userRoles = new HashSet<>();
        for (UserRole usrRole : iUsrRoleRepo.fetchAll()) {
            if (usrRole.getUsers() != null) {
                for (String usrEmail : usrRole.getUsers()) {
                    if (email.equals(usrEmail))
                        userRoles.add(usrRole.getName());
                }
            }
        }
        System.out.println("UsrSvc:getUsrRoles Done email "+email+" userRoles " + userRoles + " returning!");
        return userRoles;
    } // end: getUserRoles() method

    /* 2018-12-16 */
    private User getUserFromEmail(String email) {
        for (User user : iUserRepo.fetchAll()) {
            if (user.getUsername().equals(email))
                return user;
        }
        return null;
    } // end: getUserFromEmail() method

    /* 2018-12-24 TODO Use this for autocomplete search text field  */
    public List<User> searchUsers(String term) {
        System.out.println("UsrSvc:searchHeroes() term : "+term);
        List<User> usrLst = new ArrayList<>();

        for (User user: iUserRepo.fetchAll()) {
            if (user.getUsername().toLowerCase().contains(term.toLowerCase()))
                usrLst.add(user);
        }
        return usrLst;
    }
    /**/
}
    //////////////////////////////
    /* *****

    /* *
    public List<User> getUsers2(String jwt) {
        List<User> allUsrLst = iUserRepo.fetchAll();

        String token = jwt.replaceAll("Bearer ", "");
        System.out.println("\nUsrSvc:getUsers() User[] size : " + allUsrLst.size() + " token >" + token + "<");

        // Handle expired token
        List<User> errorUser;
        if (TokenUtil.validateToken(token) == null) {
            errorUser = new ArrayList<>();
            errorUser.add(
                new User(
                    0,
                    "Bad",
                    "Token",
                    "bad@token.com",
                    "bc4c44979100772732ae8c67128802ea8952767d"
                )
            );
            return errorUser;
        }
        return allUsrLst;//new ArrayList<>(iUserRepo.fetchAll());
    }

     */
     /* *
     private boolean adminRoleContainsEmail(String email) {
     for (String roleEmail: iUsrRoleRepo.findUserRoleByName("ADMIN").getUsers()) {
     //for (String eml: userRoles.get("ADMIN").getUsers()) {
     if (roleEmail.equals(email)) return true;
     }
     return false;
     }
    public List<User> getUsers(String jwt) {
        List<User> allUsrLst = iUserRepo.fetchAll();

        String token = jwt.replaceAll("Bearer ","");
        System.out.println("\nUsrSvc:getUsers() User[] size : "+allUsrLst.size()+" token >"+token+"<");

        // Handle expired token
        List<User> errorUser;
        if (TokenUtil.validateToken(token) == null) {
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Bad","Token","bad@token.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }

        String email = TokenUtil.getUserEmailFromToken(token);
        Set<String> roles = getUserRoles(email);

        System.out.println("\n11 UsrSvc:Email: "+email+" Roles : "+roles+"\n");

        if ( (email != null) && (roles != null)) {
            if (roles.contains("ADMIN")) return allUsrLst; //new ArrayList<>(userMap.values());
            else if (roles.contains("USER")) {
                errorUser = new ArrayList<>();
                for (String roleEmail : iUsrRoleRepo.findUserRoleByName("USER").getUsers()) { // for (String roleEmail : userRoles.get("USER").getUsers()) {
                    if ( email.equals(roleEmail) || ( !adminRoleContainsEmail(roleEmail)) ) {
                        for (User usr: iUserRepo.fetchAll()) { // for (Map.Entry<String,User> usrLst: userMap.entrySet()) {
                            for (Email usrEmail: usr.getEmails()) {
                                if (usrEmail.getValue().equals(roleEmail))
                                    errorUser.add(usr);
                            }

                        }
                    }
                }
                return errorUser;
            } else {
                errorUser = new ArrayList<>();
                errorUser.add(getUserFromEmail(email));
                return errorUser;
            }
        } else {
            System.out.println("\nUsrSvc: ERROR no roles for "+email+"\n");
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Nouser","Found","nouser@found.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }

        //return allUsrLst; // iUserRepo.fetchAll();
    } // end: getOrders() method
    /**
    public User getOrder(String orderNo) {
        return iUserRepo.fetchOne(orderNo);
    } // end: getOrder() method
    /**
    public List<User> getUsers(String jwt) {
        String token = jwt.replaceAll("Bearer ","");
        System.out.println("\nUsrSvc:getUsers() User[] size : "+userMap.size()+" token >"+token+"<");

        // Handle expired token
        List<User> errorUser;
        if (TokenUtil.validateToken(token) == null) {
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Bad","Token","bad@token.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }

        String email = TokenUtil.getUserEmailFromToken(token);
        Set<String> roles = getUserRoles(email);

        System.out.println("\n11 UsrSvc:Email: "+email+" Roles : "+roles+"\n");

        if ( (email != null) && (roles != null)) {
            if (roles.contains("ADMIN")) return new ArrayList<>(userMap.values());
            else if (roles.contains("USER")) {
                errorUser = new ArrayList<>();
                for (String roleEmail : userRoles.get("USER").getUsers()) {
                    if ( email.equals(roleEmail) || ( !adminRoleContainsEmail(roleEmail)) ) {
                        for (Map.Entry<String,User> usrLst: userMap.entrySet()) {
                            if (usrLst.getValue().getEmail().equals(roleEmail))
                                errorUser.add(usrLst.getValue());
                        }
                    }
                }
                return errorUser;
            } else {
                errorUser = new ArrayList<>();
                errorUser.add(getUserFromEmail(email));
                return errorUser;
            }
        } else {
            System.out.println("\nUsrSvc: ERROR no roles for "+email+"\n");
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Nouser","Found","nouser@found.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }
    }
    /* 2018-12-16 *
    private User getUserFromEmail(String email) {
        for (User user: iUserRepo.fetchAll()) { // for (Map.Entry<String,User> user: userMap.entrySet()) {
            for (Email usrEmail: user.getEmails()) {
                if (email.equals(usrEmail.getValue())) // if (email.equals(user.getValue().getEmail()))
                    return user;
            }

        }
        return null;
    } // end: getUserFromEmail() method
    /* 2018-12-16 *
    private Set<String> getUserRoles(String email) {
        Set<String> userRoles = new HashSet<>();
        for (UserRole usrRole: iUsrRoleRepo.fetchAll()) {
            for (String usrEmail: usrRole.getUsers()) {
                if (email.equals(usrEmail))
                    userRoles.add(usrRole.getName()); // return user.getValue().getRoles();
            }
        }
        return userRoles;
//        for (Map.Entry<String,User> user: userMap.entrySet()) {
//            if (email.equals(user.getValue().getEmail()))
//                return user.getValue().getRoles();
//        }
//        return null;
    } // end: getUserRoles() method
    /**
    private boolean adminRoleContainsEmail(String email) {
        for (String roleEmail: iUsrRoleRepo.findUserRoleByName("ADMIN").getUsers()) {
        //for (String eml: userRoles.get("ADMIN").getUsers()) {
            if (roleEmail.equals(email)) return true;
        }
        return false;
    }
    /* TODO Change to getUserByUserId accordingly or Remove completely and use the repo method*
    public User getUserById(String userId) {
        User usr = iUserRepo.fetchOne(userId);// userMap.get(id);
        System.out.println("\nUsrSvc:getUser() userId "+userId+" Usr: "+usr);
        return usr;
    }
    /**
    public User addUser(User user) {
        //user.setId(getNextKey());
        user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));
        //user.setRoles( new HashSet<>(Collections.singletonList("ADMIN")) );

        List<String> emails = new ArrayList<>( userRoles.get("ADMIN").getUsers() );
        emails.add(user.getEmail());
        userRoles.put("ADMIN", new UserRole("ADMIN","ADMIN", emails));

        System.out.println("\nUsrSvc:addUser()  : "+user);
        userMap.put(Integer.toString(user.getId()), user);
        return user;
    }
    /**
    public void updateUser(User user) {
        System.out.println("\nUsrSvc:updateUser() user : "+user);
        int id = user.getId();
        if (user.getPassword().length() < 20) // Hack: Avoid saving long password hash
            user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));
        userMap.put(Integer.toString(id),user);
    }
    /**
    public List<User> deleteUser(String id) {
        System.out.println("\nUsrSvc:deleteUser() id : "+id);
        userMap.remove(id,getUserById(id));
        return new ArrayList<>(userMap.values());
    }
    /* 2018-12-07
        Get a unique max key for the next user id
        TODO Remove after db integration
    *
    private int getNextKey() {
        int maxKey = 0, id;
        for (Map.Entry<String,User> user: userMap.entrySet()) {
            id = user.getValue().getId();
            if (id >= maxKey) maxKey = id;
        }
        return maxKey + 1;
    }
    /**/

    // User Authentication

    /* *
    public User authenticate(String userInfo, UriInfo uriInfo) {
        Credentials credentials = TokenUtil.extractCredentials(userInfo);
        User user;
        for (Map.Entry<String, User> usr: userMap.entrySet()) {
            if (usr.getValue().getEmail().equals(credentials.getUsername()) && usr.getValue().getPassword().equals(TokenUtil.getPasswordHash(credentials.getPassword()))) {
                user = usr.getValue();
                user.setToken(TokenUtil.issueToken(credentials.getUsername(),uriInfo));
                System.out.println("\nUsrSvc:authenticateUser() LOGIN SUCCESS! Logged in as : \n"+user);
                return user;
            }
        }
        return null;
    } // end: authenticate() method

    // Fake Database

    /* TODO Remove after database replacement *
    private static Map<String,User> userMap = new ConcurrentHashMap<>(); // Fake User database
    private static Map<String,UserRole> userRoles = new ConcurrentHashMap<>(); // Fake User Role database
    static {
        userMap.put("1", new User(1,"User","One","userone@gmail.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ADMIN")))); // Password: password
        userMap.put("2", new User(2,"User","Two","usertwo@gmail.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Arrays.asList("USER", "GUEST"))));
        userMap.put("3", new User(3,"User","Three","userthree@gmail.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("GUEST"))));
        System.out.println("\nInitialized userMap size "+userMap.size()+" Users.");

        userRoles.put("ADMIN", new UserRole("ADMIN","ADMIN", Arrays.asList("userone@gmail.com", "usertwo@gmail.com")));
        userRoles.put("USER", new UserRole("USER","USER", Arrays.asList("userone@gmail.com", "usertwo@gmail.com", "userthree@gmail.com")));
        userRoles.put("GUEST", new UserRole("GUEST","GUEST", null));

        System.out.println("\nInitialized userRoles size "+userRoles.size()+" Roles.");
    }
    /**/
//}

/*
    public List<User> getUsers(String jwt) {
        String token = jwt.replaceAll("Bearer ","");
        System.out.println("\nUsrSvc:getUsers() User[] size : "+userMap.size()+" token >"+token+"<");

        // Handle expired token
        List<User> errorUser;
        if (TokenUtil.validateToken(token) == null) {
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Bad","Token","bad@token.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }

        String email = TokenUtil.getUserEmailFromToken(token);
        Set<String> roles = getUserRoles(email);

        System.out.println("\n11 UsrSvc:Email: "+email+" Roles : "+roles+"\n");

        if ( (email != null) && (roles != null)) {
            if (roles.contains("ADMIN")) return new ArrayList<>(userMap.values());
            else if (roles.contains("USER")) {
                errorUser = new ArrayList<>();
                for (String roleEmail : userRoles.get("USER").getUsers()) {
                    if ( email.equals(roleEmail) || ( !adminRoleContainsEmail(roleEmail)) ) {
                        for (Map.Entry<String,User> usrLst: userMap.entrySet()) {
                            if (usrLst.getValue().getEmail().equals(roleEmail))
                                errorUser.add(usrLst.getValue());
                        }
                    }
                }
                return errorUser;
            } else {
                errorUser = new ArrayList<>();
                errorUser.add(getUserFromEmail(email));
                return errorUser;
            }
        } else {
            System.out.println("\nUsrSvc: ERROR no roles for "+email+"\n");
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Nouser","Found","nouser@found.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }
    }

    /* 2018-12-16 *
private User getUserFromEmail(String email) {
    for (Map.Entry<String,User> user: userMap.entrySet()) {
        if (email.equals(user.getValue().getEmail()))
            return user.getValue();
    }
    return null;
} // end: getUserFromEmail() method

    /* 2018-12-16 *
    private Set<String> getUserRoles(String email) {
        for (Map.Entry<String,User> user: userMap.entrySet()) {
            if (email.equals(user.getValue().getEmail()))
                return user.getValue().getRoles();
        }
        return null;
    } // end: getUserRoles() method

    /**
    private boolean adminRoleContainsEmail(String email) {
        for (String eml: userRoles.get("ADMIN").getUsers()) {
            if (eml.equals(email)) return true;
        }
        return false;
    }

    public User getUserById(String id) {
        User usr = userMap.get(id);
        System.out.println("\nUsrSvc:getUser() id "+id+" Usr: "+usr);
        return usr;
    }

    public User addUser(User user) {
        user.setId(getNextKey());
        user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));

        user.setRoles( new HashSet<>(Collections.singletonList("ADMIN")) );

        List<String> emails = new ArrayList<>( userRoles.get("ADMIN").getUsers() );
        emails.add(user.getEmail());
        userRoles.put("ADMIN", new UserRole("ADMIN","ADMIN", emails));

        System.out.println("\nUsrSvc:addUser()  : "+user);
        userMap.put(Integer.toString(user.getId()), user);
        return user;
    }

    public void updateUser(User user) {
        System.out.println("\nUsrSvc:updateUser() user : "+user);
        int id = user.getId();
        if (user.getPassword().length() < 20) // Hack: Avoid saving long password hash
            user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));
        userMap.put(Integer.toString(id),user);
    }

    public List<User> deleteUser(String id) {
        System.out.println("\nUsrSvc:deleteUser() id : "+id);
        userMap.remove(id,getUserById(id));
        return new ArrayList<>(userMap.values());
    }

    /* 2018-12-07
        Get a unique max key for the next user id
        TODO Remove after db integration
    *
    private int getNextKey() {
        int maxKey = 0, id;
        for (Map.Entry<String,User> user: userMap.entrySet()) {
            id = user.getValue().getId();
            if (id >= maxKey) maxKey = id;
        }
        return maxKey + 1;
    }

    // User Authentication

    /**
    public User authenticate(String userInfo, UriInfo uriInfo) {
        Credentials credentials = TokenUtil.extractCredentials(userInfo);
        User user;
        for (Map.Entry<String, User> usr: userMap.entrySet()) {
            if (usr.getValue().getEmail().equals(credentials.getUsername()) && usr.getValue().getPassword().equals(TokenUtil.getPasswordHash(credentials.getPassword()))) {
                user = usr.getValue();
                user.setToken(TokenUtil.issueToken(credentials.getUsername(),uriInfo));
                System.out.println("\nUsrSvc:authenticateUser() LOGIN SUCCESS! Logged in as : \n"+user);
                return user;
            }
        }
        return null;
    } // end: authenticate() method

    // Fake Database

    // TODO Remove after database replacement
    private static Map<String,User> userMap = new ConcurrentHashMap<>(); // Fake User database
    private static Map<String,UserRole> userRoles = new ConcurrentHashMap<>(); // Fake User Role database
static {
        userMap.put("1", new User(1,"User","One","userone@gmail.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ADMIN")))); // Password: password
        userMap.put("2", new User(2,"User","Two","usertwo@gmail.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Arrays.asList("USER", "GUEST"))));
        userMap.put("3", new User(3,"User","Three","userthree@gmail.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("GUEST"))));
        System.out.println("\nInitialized userMap size "+userMap.size()+" Users.");

        userRoles.put("ADMIN", new UserRole("ADMIN","ADMIN", Arrays.asList("userone@gmail.com", "usertwo@gmail.com")));
        userRoles.put("USER", new UserRole("USER","USER", Arrays.asList("userone@gmail.com", "usertwo@gmail.com", "userthree@gmail.com")));
        userRoles.put("GUEST", new UserRole("GUEST","GUEST", null));

        System.out.println("\nInitialized userRoles size "+userRoles.size()+" Roles.");
        }
*/
