package com.pmk.app.model.jwt;

import com.pmk.app.util.PasswordUtils;

import java.util.Objects;
import java.util.UUID;

/**
 * Created by phil on 1/11/2018.
 * For use with JWT
 * https://antoniogoncalves.org/2016/10/03/securing-jax-rs-endpoints-with-jwt/
 * https://github.com/agoncal/agoncal-sample-jaxrs/blob/master/04-JWT/src/main/java/org/agoncal/sample/jaxrs/jwt/domain/User.java
 * TODO: Merge into model folder
 */
public class User {

	public static final String FIND_ALL = "User.findAll";
    public static final String COUNT_ALL = "User.countAll";
    public static final String FIND_BY_LOGIN_PASSWORD = "User.findByLoginAndPassword";

    private String id;
    private String lastName;
    private String firstName;
    private String login;
    private String password;
    private String twitter;
    private String avatarUrl;
    private String company;

    public User() {}

    public User(String id, String lastName) {
        this.id = id;
        this.lastName = lastName;
    }

    public User(String id, String lastName, String firstName, String login, String password) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.login = login;
        this.password = password;
    }

    public User(String id, String lastName, String firstName, String twitter, String avatarUrl, String company) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.twitter = twitter;
        this.avatarUrl = avatarUrl;
        this.company = company;
    }

    private void setUUID() {
        id = UUID.randomUUID().toString().replace("-", "");
        password = PasswordUtils.digestPassword(password);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    // ======================================
    // =   Methods hash, equals, toString   =
    // ======================================

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", lastName='" + lastName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", twitter='" + twitter + '\'' +
                ", avatarUrl='" + avatarUrl + '\'' +
                ", company='" + company + '\'' +
                '}';
    }
}
