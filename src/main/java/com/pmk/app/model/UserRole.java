package com.pmk.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pmk.app.dao.DAOBean;

import java.util.List;

/**
 * 2018-12-10
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserRole extends DAOBean {
    private int userRoleId;
    private String name;
    private String desc;
    private int priority;
    private List<String> users;

    public UserRole() {}

    public UserRole(int userRoleId, String name, String desc, List<String> users) {
        this.userRoleId = userRoleId;;
        this.name = name;
        this.desc = desc;
        this.users = users;
    }

    public int getUserRoleId() { return userRoleId; }
    public void setUserRoleId(int userRoleId) { this.userRoleId = userRoleId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDesc() { return desc; }
    public void setDesc(String desc) { this.desc = desc; }

    public List<String> getUsers() { return users; }
    public void setUsers(List<String> users) { this.users = users; }

    public int getPriority() { return priority; }
    public void setPriority(int priority) { this.priority = priority; }

    @Override
    public String toString() {
        return "UserRole [id="+getId()+", userRoleId="+userRoleId+", name=" + name + ", desc=" + desc  + ", priority=" + priority + ", users=" + users + "]";
    }
}
