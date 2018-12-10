package com.pmk.app.service;

import com.pmk.app.model.Credentials;
import com.pmk.app.model.User;
import com.pmk.app.util.TokenUtil;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.ws.rs.core.UriInfo;

/*
 * Created by phil on 1/14/2018.
 */
public class UserService {

    public List<User> getUsers() {
        System.out.println("\nUserService:getUsers() User[] size : "+userMap.size());
        return new ArrayList<>(userMap.values());
    }

    public User getUserById(String id) {
        User usr = userMap.get(id);
        System.out.println("\nUserService:getUser() id "+id+" Usr: "+usr);
        return usr;
    }

    public User addUser(User user) {
        user.setId(getNextKey());
        user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));
        System.out.println("\nUserService:addUser()  : "+user);
        userMap.put(Integer.toString(user.getId()), user);
        return user;
    }

    public void updateUser(User user) {
        System.out.println("\nUserService:updateUser() user : "+user);
        int id = user.getId();
        user.setPassword(TokenUtil.getPasswordHash(user.getPassword()));
        userMap.put(Integer.toString(id),user);
    }

    public List<User> deleteUser(String id) {
        System.out.println("\nUserService:deleteUser() id : "+id);
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

    // 2018-2-01 TODO Create another front end return object without id other than user
    public User authenticate(String userInfo, UriInfo uriInfo) {
        Credentials credentials = TokenUtil.extractCredentials(userInfo);
        User user;
        for (Map.Entry<String, User> usr: userMap.entrySet()) {
            if (usr.getValue().getEmail().equals(credentials.getUsername()) && usr.getValue().getPassword().equals(TokenUtil.getPasswordHash(credentials.getPassword()))) {
                user = usr.getValue();
                user.setToken(TokenUtil.issueToken(credentials.getUsername(),uriInfo.toString()));

                System.out.println("\nUsrSvc:authenticateUser() LOGIN SUCCESS! Logged in as : \n"+user);
                return user;
            }
        }
        System.out.println("UsrSvc:authenticateUser() FAILURE! Unable to find user : "+credentials.getUsername()
        );
        return null;
    }

    // Database
    // TODO Remove after database replacement
    private static Map<String,User> userMap = new ConcurrentHashMap<>();
    static {
        userMap.put("1", new User(1,"User","One","userone@gmail.com","eb3e2b2b8508e30fffe6a27959fb3b264b2af06b")); // Password: password
        userMap.put("2", new User(2,"User","Two","usertwo@gmail.com","eb3e2b2b8508e30fffe6a27959fb3b264b2af06b"));
        userMap.put("3", new User(3,"User","Three","userthree@gmail.com","eb3e2b2b8508e30fffe6a27959fb3b264b2af06b"));
        System.out.println("\nInitialized userMap size "+userMap.size()+" Users.");
    }
}
