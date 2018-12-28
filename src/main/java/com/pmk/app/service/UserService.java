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
            if (roles.contains("ADMIN")) return allUsers;
            else if (roles.contains("USER")) {
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

        if (iUserRepo.fetchOne(user.getId()) == null) { // Only update userId for new users
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
    public void deleteUser(String id) {
        User delete = iUserRepo.fetchOne(id);
        System.out.println("UsrSvc:deleteUser id : " + id + " user "+delete);
        iUserRepo.delete(delete);
        System.out.println("UsrSvc:deleteUser DONE deleting id : " + id);
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

    /**/
    public User getUser(String id) {
        User usr = iUserRepo.fetchOne(id);
        if (usr != null) usr.setRoles(getUserRoles(usr.getUsername()));
        System.out.println("\nUsrSvc:getUser() id " + id + " Usr: " + usr);
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
    } // end: searchUsers() method
    /**/
}