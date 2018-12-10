package com.pmk.app.util;

import com.pmk.app.model.Credentials;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.*;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import static com.pmk.app.security.PasswordHashingDemo.generateHash;

import org.json.JSONObject;

/**
 * Created by phil on 1/18/2018.
 */
public class TokenUtil {
    public static String issueToken(String login, String uriInfo) {
        Key key = generateEncryptionSecret();
        String jwtToken = Jwts.builder()
                .setSubject(login)
                .setIssuer(uriInfo)
                .setIssuedAt(new Date())
                .setExpiration(toDate(LocalDateTime.now().plusMinutes(15L)))
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
        System.out.println("#### generating token for a key : " + jwtToken + " - " + key);
        return jwtToken;
    }
    public static boolean verifyToken(String token) {
        try {

            // Validate the token
            Jwts.parser().setSigningKey(generateEncryptionSecret()).parseClaimsJws(token);
            System.out.println("#### valid token : " + token);
            return true;

        } catch (Exception e) {
            System.out.println("#### invalid token : " + token); // logger.severe("#### invalid token : " + token);
            return false;
        }
    }

    private static SecretKey generateEncryptionSecret() {
        try {
            javax.crypto.KeyGenerator generator = javax.crypto.KeyGenerator.getInstance("AES");
            generator.init(128);

            return generator.generateKey();
        } catch (NoSuchAlgorithmException ex) {
            System.out.println("keyutil"+ ex);
            return null;
        }
    }

    private static Date toDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
    }

    // Password Hashing
    public static String getPasswordHash(String password) {
        String hash = generateHash("my-salt-text" + password); // TODO: Get the salt from a utility?
        System.out.println("\nTokenUtl:getPasswordHash Creating "+hash+" from "+password);
        return hash;
    }

    public static Credentials extractCredentials(String authString) {
        JSONObject obj = new JSONObject(authString);
        System.out.println("username: " + obj.getString("username"));
        Credentials credentials = new Credentials(
                obj.getString("username"),
                obj.getString("password")
        );
        System.out.println("UsrSvc:isUserAuthenticated() username : "+credentials.getUsername()+" password : "+credentials.getPassword());
        return credentials;
    }
}