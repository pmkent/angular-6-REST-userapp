package com.pmk.app.model;

import com.pmk.app.dao.DAOBean;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Created by phil on 1/14/2018.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class User extends DAOBean {
    private int userId;
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private String token;
    private List<Address> addresses;
    private Set<String> roles;
    private String country;
    private String website;
    private List<Phone> phones;
    private List<Email> emails;
    private String showpassword; // 2018-12-13 Bug fix - Angular form Error: Must supply a value for form control with name: 'showpassword'.

    private Date dateOfBirth;
    private Gender gender;

    public User() {}

    public User(int userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    //for password salt
    public User(
            int userId,
            String username,
            String firstName,
            String lastName,
            String password,
            String token
    ) {
        this(userId,username,password);
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = token;
    }

    public User(
            int userId,
            String username,
            String firstName,
            String lastName,
            String token
    ) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = token;
    }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public List<Address> getAddresses() { return addresses; }
    public void setAddresses(List<Address> addresses) { this.addresses = addresses; }

    public Set<String> getRoles() { return roles; }
    public void setRoles(Set<String> roles) { this.roles = roles; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getWebsite() { return website; }
    public void setWebsite(String website) { this.website = website; }

    public List<Phone> getPhones() { return phones; }
    public void setPhones(List<Phone> phones) { this.phones = phones; }

    public List<Email> getEmails() { return emails; }
    public void setEmails(List<Email> emails) { this.emails = emails; }

    public String getShowpassword() { return showpassword; }
    public void setShowpassword(String showpassword) { this.showpassword = showpassword; }

    public Date getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public Gender getGender() { return gender; }
    public void setGender(Gender gender) { this.gender = gender; }

    @Override
    public String toString() {
        return "User [id="+getId()+", userId="+userId+", username="+username+", firstName="+firstName +
                ", lastName="+lastName+", password="+password +
                ", country="+country+", website="+website+", phones="+phones +
                ", roles="+roles+", token="+token+
                ", dateOfBirth=" + dateOfBirth + ", gender=" + gender +
                "]";
    }
}
