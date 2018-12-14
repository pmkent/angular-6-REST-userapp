package com.pmk.app.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.util.Set;

/**
 * Created by phil on 1/14/2018.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class User {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String token;
    private String showpassword; // 2018-12-13 Bug fix - Angular form Error: Must supply a value for form control with name: 'showpassword'.

    private Set<String> roles; // 2018-12-10

    public User() {}

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(int id, String firstName, String lastName, String email, String password, Set<String> roles) { // 2018-12-10
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles; // 2018-12-10
    }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public Set<String> getRoles() { return roles; } // 2018-12-10
    public void setRoles(Set<String> roles) { this.roles = roles; } // 2018-12-10

    public String getShowpassword() { return showpassword; }
    public void setShowpassword(String showpassword) { this.showpassword = showpassword; }

    @Override
    public String toString() {
        return "User [id="+id+", firstName="+firstName+", lastName="+lastName+", email=" + email + ", password=" + password + "]";
    }
}
