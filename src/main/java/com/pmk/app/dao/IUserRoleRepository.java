package com.pmk.app.dao;

import com.pmk.app.model.UserRole;
import org.jongo.MongoCollection;
import org.jongo.MongoCursor;

import java.util.ArrayList;
import java.util.List;

/**
 * 2018-12-21
 */
public class IUserRoleRepository implements Repository<UserRole> {

    private MongoCollection usrRoleColl;
    public IUserRoleRepository(MongoCollection collection) { this.usrRoleColl = collection; }

    @Override
    public List<UserRole> fetchAll() {
        MongoCursor<UserRole> all = usrRoleColl.find().sort("{ userRoleId : 1 }").as(UserRole.class);
        List<UserRole> userRoles = new ArrayList<>();
        while( all.hasNext()) userRoles.add(all.next());
        return userRoles;
    }

    @Override
    public UserRole fetchOne(String userRoleId) {
        return usrRoleColl.findOne("{ userRoleId : '"+userRoleId+"'}").as(UserRole.class);
    }

    @Override
    public void upsert(UserRole object) {
        usrRoleColl.save(object);
    }

    @Override
    public void delete(UserRole object) {
        usrRoleColl.remove(object.getId());
    }

    /* 2018-12-21 */
    public UserRole findUserRoleByName(String name) {
        return usrRoleColl.findOne("{ name : '"+name+"'}").as(UserRole.class);
    } // end : findUsersByUserRoleName()
    /* 2018-12-21 *
    public List<UserRole> findUsersByUserRoleName(String name) {
        MongoCursor<UserRole> cursor = usrRoleColl.find("{name : #}",name).as(UserRole.class);
        List<UserRole> itemList = new ArrayList<>();
        while (cursor.hasNext())
            itemList.add(cursor.next());
        return itemList;
    } // end : findUsersByUserRoleName()
    /**/
}
