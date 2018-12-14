package com.pmk.app.util;

import com.pmk.app.model.Credentials;
import com.pmk.app.model.UserRole;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import javax.ws.rs.core.UriInfo;
import java.io.UnsupportedEncodingException;
import java.security.Key;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.crypto.spec.SecretKeySpec;
import org.json.JSONObject;

/**
 * Created by phil on 1/18/2018.
 */
public class TokenUtil {

    private static final String JWT_SECRET = new AppUtil().getSingleProperty("jwt.secret.key");
    private static final int TOKEN_EXPIRATION_TIME = Integer.parseInt(new AppUtil().getSingleProperty("token.expires.in"));
    private static final AppUtil APP_UTIL = new AppUtil();

    public static String issueToken(String username, UriInfo uriInfo) {
        String jwtToken = Jwts.builder()
                .setSubject(username)
                .setIssuer(uriInfo.getAbsolutePath().toString())
                .setIssuedAt(new Date())
                .setExpiration(toDate(LocalDateTime.now().plusMinutes(TOKEN_EXPIRATION_TIME)))
                .signWith(SignatureAlgorithm.HS512, generateEncryptionSecret())
                .compact();
        System.out.println("#### generating token");
        return jwtToken;
    }

    /* 2018-1-31 */
    public static String getUserEmailFromToken(String token) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(JWT_SECRET.getBytes("UTF-8"))
                    .parseClaimsJws(token)
                    .getBody();
            return claims.getSubject();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }

    /* 2018-1-31 */
    public static Set<String> getRolesFromToken(String token, List<UserRole> roles) {
        Set<String> tokenRoles = new HashSet<>();
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(JWT_SECRET.getBytes("UTF-8"))
                    .parseClaimsJws(token) // io.jsonwebtoken.ExpiredJwtException: JWT expired at 2018-12-11T21:28:54Z. Current time: 2018-12-11T21:29:03Z, a difference of 9864 milliseconds.  Allowed clock skew: 0 milliseconds.
                    .getBody();
            String email = claims.getSubject();
            for (UserRole r: roles) {
                for (String uname: r.getUsers()) {
                    if (uname.equals(email)) tokenRoles.add(r.getName());
                }
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return tokenRoles;
    }

    /**/
    public static Jws validateToken(String token) {
        Jws jws = null;
        try {
            jws = Jwts.parser().setSigningKey(generateEncryptionSecret()).parseClaimsJws(token);
        } catch (Exception e) {
            System.out.println("\n#### INVALID TOKEN : " + token);
        }
        return jws;
    }

    private static Key generateEncryptionSecret() {
        return new SecretKeySpec(JWT_SECRET.getBytes(), 0, JWT_SECRET.getBytes().length, "DES"); //"AES"
    }

    /**/
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
    /**/
    public static String getPasswordHash(String password) {
        String hash = generateHash(APP_UTIL.getSingleProperty("jwt.secret.key")+password);
        System.out.println("\nTokenUtl:getPasswordHash Creating "+hash+" from "+password);
        return hash;
    }
    /**/
    private static Date toDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
    }

    /**/
    private static String generateHash(String input) {
        StringBuilder hash = new StringBuilder();

        try {
            MessageDigest sha = MessageDigest.getInstance("SHA-1");
            byte[] hashedBytes = sha.digest(input.getBytes());
            char[] digits = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f'
            };
            for (byte b : hashedBytes) {
                hash.append(digits[(b & 0xf0) >> 4]);
                hash.append(digits[b & 0x0f]);
            }
        } catch (NoSuchAlgorithmException e) { // handle error here.
        }
        return hash.toString();
    }
    /**/
}