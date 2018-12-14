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

    private String TOKEN;

    public List<User> getUsers(String jwt) {
        String token = jwt.replaceAll("Bearer ","");
        System.out.println("\nUsrSvc:getUsers() User[] size : "+userMap.size()+" token >"+token+"<");

        // Handle expired token
        List<User> errorUser;
        if (TokenUtil.validateToken(token) == null) { // if (!TokenUtil.validateToken(token)) {
            errorUser = new ArrayList<>();
            errorUser.add(new User(0,"Bad","Token","bad@token.com","bc4c44979100772732ae8c67128802ea8952767d", new HashSet<>(Collections.singletonList("ERROR"))));
            return errorUser;
        }

        Set<String> roles = TokenUtil.getRolesFromToken(token, new ArrayList<>(userRoles.values())); // io.jsonwebtoken.ExpiredJwtException: JWT expired at 2018-12-11T21:28:54Z. Current time: 2018-12-11T21:29:03Z, a difference of 9864 milliseconds.  Allowed clock skew: 0 milliseconds.

        String email = TokenUtil.getUserEmailFromToken(token);
        if (roles.contains("ADMIN")) return new ArrayList<>(userMap.values());
        else return getUserByRole(email);
    }

    private List<User> getUserByRole(String email) {
        List<User> userLst = new ArrayList<>();
        for (Map.Entry<String,User> usrLst: userMap.entrySet()) {
            System.out.println();
            if (email.equals(usrLst.getValue().getEmail())) {
                for (Map.Entry<String,UserRole> role: userRoles.entrySet()) {
                    if (role.getValue().getName().equals(usrLst.getValue().getEmail()))
                        userLst.add(usrLst.getValue());
                }
            }
        }
        System.out.println("UsrSvc:getUsrRoles "+userLst);
        return userLst;
    } // end: getUserByRole() method

    public User getUserById(String id) {
        User usr = userMap.get(id);
        System.out.println("\nUsrSvc:getUser() id "+id+" Usr: "+usr);
        return usr;
    }

    public User addUser(User user) {
        user.setId(getNextKey());
        user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));

        user.setRoles( new HashSet<>(Collections.singletonList("ADMIN")) );
        //System.out.println("\nUsrSvc:addUser roles "+userRoles.get("ADMIN"));
        List<String> emails = new ArrayList<>( userRoles.get("ADMIN").getUsers() );
        emails.add(user.getEmail());
        userRoles.put("ADMIN", new UserRole("ADMIN","ADMIN", emails));
        //System.out.println("\nUsrSvc:addUser THEN roles "+userRoles.get("ADMIN"));
        System.out.println("\nUsrSvc:addUser()  : "+user);
        userMap.put(Integer.toString(user.getId()), user);
        return user;
    }

    public void updateUser(User user) {
        System.out.println("\nUsrSvc:updateUser() user : "+user);
        int id = user.getId();
        if (user.getPassword().length() < 20)//     !"password".equals(user.getPassword())) // TODO test
            user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));
        user.setToken(TOKEN);
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
                TOKEN = user.getToken();
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
        userRoles.put("GUEST", new UserRole("GUEST","GUEST", Arrays.asList("usertwo@gmail.com", "userthree@gmail.com")));
        System.out.println("\nInitialized userRoles size "+userRoles.size()+" Roles.");
    }
}
