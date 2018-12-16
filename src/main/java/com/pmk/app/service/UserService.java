package com.pmk.app.service;

import com.pmk.app.model.Credentials;
import com.pmk.app.model.User;
import com.pmk.app.model.UserRole;
import com.pmk.app.util.TokenUtil;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import javax.ws.rs.core.UriInfo;

/*
 * Created by phil on 1/14/2018.
 */
public class UserService {

//    private User LOGGED_IN_USR;

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

        String email = TokenUtil.getUserEmailFromToken(token);//LOGGED_IN_USR.getEmail();
        Set<String> roles = getUserRoles(email); // LOGGED_IN_USR.getRoles();

        System.out.println("\n11 UsrSvc:Email: "+email+" Roles : "+roles+"\n");

        if ( (email != null) && (roles != null)) {
            if (roles.contains("ADMIN")) return new ArrayList<>(userMap.values());
            else if (roles.contains("USER")) {
                errorUser = new ArrayList<>();
                for (String roleEmail : userRoles.get("USER").getUsers()) {
                    if ( email.equals(roleEmail) || ( !adminRoleContainsEmail(roleEmail)) ) { // if ( LOGGED_IN_USR.getEmail().equals(roleEmail) || ( !adminRoleContainsEmail(roleEmail)) ) {
                        for (Map.Entry<String,User> usrLst: userMap.entrySet()) {
                            if (usrLst.getValue().getEmail().equals(roleEmail))
                                errorUser.add(usrLst.getValue());
                        }
                    }
                }
                return errorUser;
            } else {
                errorUser = new ArrayList<>();
                errorUser.add(getUserFromEmail(email));//LOGGED_IN_USR);
                return errorUser;
            }
        } else {
            System.out.println("\nUsrSvc: ERROR no roles for "+email+"\n");
//            return null;
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Nouser","Found","nouser@found.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }
    }

    /* 2018-12-16 */
    private User getUserFromEmail(String email) {
        for (Map.Entry<String,User> user: userMap.entrySet()) {
            if (email.equals(user.getValue().getEmail()))
                return user.getValue();
        }
        return null;
    } // end: getUserFromEmail() method

    /* 2018-12-16 */
    private Set<String> getUserRoles(String email) {
        for (Map.Entry<String,User> user: userMap.entrySet()) {
            if (email.equals(user.getValue().getEmail()))
                return user.getValue().getRoles();
        }
        return null;
    } // end: getUserRoles() method

    /**/
    private boolean adminRoleContainsEmail(String email) { // private boolean roleContainsEmail(String role, String email) {
        for (String eml: userRoles.get("ADMIN").getUsers()) { // for (String eml: userRoles.get(role).getUsers()) {
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
        ///////////////
//        user.setToken(getUserFromEmail(user.getEmail()).getToken());////LOGGED_IN_USR.getToken());
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
    */
    private int getNextKey() {
        int maxKey = 0, id;
        for (Map.Entry<String,User> user: userMap.entrySet()) {
            id = user.getValue().getId();
            if (id >= maxKey) maxKey = id;
        }
        return maxKey + 1;
    }

    // User Authentication

    /**/
    public User authenticate(String userInfo, UriInfo uriInfo) {
        Credentials credentials = TokenUtil.extractCredentials(userInfo);
        User user;
        for (Map.Entry<String, User> usr: userMap.entrySet()) {
            if (usr.getValue().getEmail().equals(credentials.getUsername()) && usr.getValue().getPassword().equals(TokenUtil.getPasswordHash(credentials.getPassword()))) {
                user = usr.getValue();
                user.setToken(TokenUtil.issueToken(credentials.getUsername(),uriInfo));
//                LOGGED_IN_USR = user;
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
}
