package com.pmk.app.model;

import java.util.List;

/**
 * 2018-12-10
 */
//@JsonIgnoreProperties(ignoreUnknown = true)
public class UserRole {

    private String name;
    private String desc;
    private int priority;
    private List<String> users;

    public UserRole() {}

    public UserRole(String name, String desc, List<String> users) {
        this.name = name;
        this.desc = desc;
        this.users = users;
    }

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
        return "Role [name=" + name + ", desc=" + desc  + ", priority=" + priority + ", users=" + users + "]";
    }

}
