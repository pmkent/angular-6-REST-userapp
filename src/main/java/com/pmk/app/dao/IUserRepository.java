package com.pmk.app.dao;

import com.pmk.app.model.User;
import com.pmk.app.util.PasswordUtil;
import org.bson.types.ObjectId;
import org.jongo.MongoCollection;
import org.jongo.MongoCursor;

import java.util.ArrayList;
import java.util.List;

import static org.jongo.Oid.withOid;

/**
 * 2018-12-21
 */
public class IUserRepository implements Repository<User> {

    private MongoCollection usrColl;
    public IUserRepository(MongoCollection collection) { this.usrColl = collection; }

    @Override
    public List<User> fetchAll() {
        MongoCursor<User> all = usrColl.find().sort("{ userId : 1 }").as(User.class);
        List<User> users = new ArrayList<>();
        while( all.hasNext()) users.add(all.next());
        return users;
    }

    @Override
    public User fetchOne(String id) {
        System.out.println("\n\nUsrRepo:findUserById id: "+id+"\n\n");
        if (id == null) return null;
        return usrColl.findOne(withOid(id)).as(User.class);

    }

    public User findUserByUsername(String username) {
        return usrColl.findOne("{username : '"+username+"'}").as(User.class);
    }

//    public User findUserByUserId(String userId) {
//        return usrColl.findOne("{userId : "+userId+"}").as(User.class);
//    }

    @Override
    public void upsert(User object) {
        usrColl.save(object);
    }

    @Override
    public void delete(User object) {
        System.out.println("\n\nUsrRepo:delete About to DELETE id: "+object.getId()+" \n\n");
        usrColl.remove(new ObjectId(object.getId()));
        System.out.println("\n\nUsrRepo:delete Just DELETED id: "+object.getId()+" \n\n");
    }

    /**/
    private boolean isPasswordCorrect(char[] input, String password) {
        String stringPassword = new String(input);
        return password.equals(PasswordUtil.getPasswordHash(stringPassword));
    }

    /**/
    public User login(String username, char[] password) {
        User user = findUserByUsername(username);
        if ((user != null) && (user.getUsername().equals(username))) {
            if (isPasswordCorrect(password, user.getPassword())) {
                return user;
            }
        }
        return null;
    } // end: login() method
}
