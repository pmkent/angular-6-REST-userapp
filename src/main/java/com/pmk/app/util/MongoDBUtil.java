package com.pmk.app.util;

import com.mongodb.MongoClient;
import com.pmk.app.dao.IUserRepository;
import com.pmk.app.dao.IUserRoleRepository;
import com.pmk.app.model.*;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import static com.pmk.app.model.Gender.MALE;

/**
 * 2018-12-28
 */
public class MongoDBUtil {

    private static final String MONGO_DB_NAME = new AppUtil().getSingleProperty("mongo.db.name"); // 2018-12-22 TODO Change in src/main/resources/config.properties
    private MongoCollection mongoCollection;
    private Jongo jongo;
    private AppUtil APP_UTL = new AppUtil();
    private Date TODAY = new Date();

    public static void main(String[] arg) {
        MongoDBUtil dbUtil = new MongoDBUtil();
        dbUtil.initJongoMongoDb();
        dbUtil.populateUserDb();
        dbUtil.populateUserRoleDb();
    }

    private void initJongoMongoDb() {
        System.out.println("MongoDBUtil:initJongoMongoDb() Using DB "+MONGO_DB_NAME);
        MongoClient mongoClient = new MongoClient();
        jongo = new Jongo(mongoClient.getDB(MONGO_DB_NAME));
    }

    private void populateUserDb() {
        List<User> users = getUserDbData();
        System.out.println("\nPopulating "+users.size()+" users into "+MONGO_DB_NAME+".\n");
        IUserRepository userRepository = getUserCollection();
        for (User user: users) {
            userRepository.upsert(user);
        }
    }
    private void populateUserRoleDb() {
        List<UserRole> userRoles = getUserRoleDbData();
        System.out.println("\nPopulating "+userRoles.size()+" user user roles into "+MONGO_DB_NAME+".\n");
        IUserRoleRepository userRoleRepo = getUserRoleCollection();
        for (UserRole userRole: userRoles) {
            userRoleRepo.upsert(userRole);
        }
    }

    private IUserRepository getUserCollection() {
        mongoCollection = jongo.getCollection("user");
        mongoCollection.ensureIndex("{userId : 1}","{unique : true, dropDups: true}");
        return new IUserRepository(mongoCollection);
    }
    private IUserRoleRepository getUserRoleCollection() {
        mongoCollection = jongo.getCollection("user_role");
        mongoCollection.ensureIndex("{userRoleId : 1}", "{unique: true, dropDups: true}");
        return new IUserRoleRepository(mongoCollection);
    }

    private PasswordUtil passwordUtil = new PasswordUtil();

    /* 2018-3-31 Populate 3 Use Roles */
    private List<User> getUserDbData() {
        List<User> usrLst = new ArrayList<>();
        User user;

        ///////////////////////
        List<Address> addresses = new ArrayList<>();
        addresses.add(createAddress(1,"100 Main Street","New York","New York","10010"));

        List<Phone> phones = new ArrayList<>();
        phones.add(createPhone(1,"2120001234","Mobile","212",null,true));

        List<Email> emails = new ArrayList<>();
        emails.add(createEmail(1,"Primary","userone@gmail.com",true));

        // User One
        user = createUser(
                1,
                "userone@gmail.com", // username
                "User", // firstname
                "One", // lastname
                "password", // password
                null, // token
                addresses,//addresses,
                null, // roles
                "USA", // country
                "www.pmkent.com", // website
                phones, // phones
                emails, // emails,
                MALE, // GENDER
                new Date(APP_UTL.getFormattedDate("1-25-2002").getTime()) // dob   "M-dd-yyyy"
        );
        usrLst.add(user);

        // User Two
        addresses = new ArrayList<>();
        addresses.add(createAddress(1,"200 Boone Avenue","Spokane","Washington","99202"));

        phones = new ArrayList<>();
        phones.add(createPhone(1,"5090001234","Mobile","509",null,true));

        emails = new ArrayList<>();
        emails.add(createEmail(1,"Primary","usertwo@gmail.com",true));

        user = createUser(
                2,
                "usertwo@gmail.com", // username
                "User", // firstname
                "Two", // lastname
                "password", // password
                null, // token
                addresses,//addresses,
                null, // roles
                "USA", // country
                "www.pmkent.com", // website
                phones, // phones
                emails, // emails,
                MALE, // GENDER
                new Date(APP_UTL.getFormattedDate("12-25-1999").getTime()) // dob   "M-dd-yyyy"
        );
        usrLst.add(user);

        // User Three
        addresses = new ArrayList<>();
        addresses.add(createAddress(1,"300 Presidential Blvd","Austin","Texas","78719"));

        phones = new ArrayList<>();
        phones.add(createPhone(1,"5120001234","Mobile","512",null,true));

        emails = new ArrayList<>();
        emails.add(createEmail(1,"Primary","userthree@gmail.com",true));

        user = createUser(
                3,
                "userthree@gmail.com", // username
                "User", // firstname
                "Three", // lastname
                "password", // password
                null, // token
                addresses,//addresses,
                null, // roles
                "USA", // country
                "www.pmkent.com", // website
                phones, // phones
                emails, // emails,
                MALE, // GENDER
                new Date(APP_UTL.getFormattedDate("8-15-1980").getTime()) // dob   "M-dd-yyyy"
        );
        usrLst.add(user);

        return usrLst;

    }

    /**/
    private User createUser(
            int userId,
            String username, String firstName, String lastName, String password, String token,
            List<Address> addresses, Set<String> roles, String country, String website,
            List<Phone> phones,
            List<Email> emails,
            Gender gender,
            Date dateOfBirth
    ) {
        User user = new User();
        //Date today = new Date();

        user.setUserId(userId);
        user.setUsername(username);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPassword(passwordUtil.getPasswordHash(password));
        user.setToken(token);
        user.setAddresses(addresses);
        user.setRoles(roles);
        user.setCountry(country);
        user.setWebsite(website);
        user.setPhones(phones);
        user.setEmails(emails);

        user.setGender(gender);
        user.setDateOfBirth(dateOfBirth);

        user.setCreateDt(TODAY);
        user.setUpdateDt(TODAY);
        user.setUpdateBy("admin");

        return user;
    } // end: createUser() method

    private Address createAddress(int addressId, String street, String city, String state, String zip) {
        Address address = new Address();

        address.setAddressId(addressId);
        address.setStreet(street);
        address.setCity(city);
        address.setState(state);
        address.setZip(zip);

        address.setCreateDt(TODAY);
        address.setUpdateDt(TODAY);
        address.setUpdateBy("admin");

        return address;
    } // end: createAddress() method

    /**/
    private Phone createPhone(int phoneId, String number, String type, String areaCode, String extension, boolean primary) {
        Phone phone = new Phone();

        phone.setPhoneId(phoneId);
        phone.setNumber(number);
        phone.setType(type);
        phone.setAreaCode(areaCode);
        phone.setExtension(extension);
        phone.setPrimary(primary);

        phone.setCreateDt(TODAY);
        phone.setUpdateDt(TODAY);
        phone.setUpdateBy("admin");

        return phone;
    } // end: createPhone() method.

    /**/
    private Email createEmail(int emailId, String type, String value, boolean primary) {
        Email email = new Email();

        email.setEmailId(emailId);
        email.setType(type);
        email.setValue(value);
        email.setPrimary(primary);

        email.setCreateDt(TODAY);
        email.setUpdateDt(TODAY);
        email.setUpdateBy("admin");

        return email;
    }

    // User Role
    private List<UserRole> getUserRoleDbData() {
        List<UserRole> userRoleList = new ArrayList<>();

        List<String> users = new ArrayList<>();
        users.add("userone@gmail.com");
        users.add("usertwo@gmail.com");
        users.add("userthree@gmail.com");

        List<String> adminUsers = new ArrayList<>();
        adminUsers.add("userone@gmail.com");

        userRoleList.add(createUserRole(1, "ADMIN","Administrator",1,adminUsers));
        userRoleList.add(createUserRole(2, "USER","User",2,users));
        userRoleList.add(createUserRole(3, "GUEST","Guest",3,null));

        return userRoleList;
    } // end: populateUserRoleUsingSvc() method.

    private UserRole createUserRole(int userRoleId, String name, String desc, int priority, List<String> users) {
        UserRole userRole = new UserRole();
        Date today = new Date();

        userRole.setUserRoleId(userRoleId);
        userRole.setName(name);
        userRole.setDesc(desc);
        userRole.setPriority(priority);
        userRole.setUsers(users);

        userRole.setCreateDt(today);
        userRole.setUpdateDt(today);

        userRole.setUpdateBy("admin");

        return userRole;
    } // end: createUserRole() method.
}
