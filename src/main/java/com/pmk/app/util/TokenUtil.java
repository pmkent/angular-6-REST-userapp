package com.pmk.app.util;

import com.pmk.app.model.Credentials;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import javax.ws.rs.core.UriInfo;
import java.io.UnsupportedEncodingException;
import java.security.Key;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;
import org.json.JSONObject;

/**
 * Created by phil on 1/18/2018.
 */
public class TokenUtil {

    private static final String JWT_SECRET = new AppUtil().getSingleProperty("jwt.secret.key");
    private static final int TOKEN_EXPIRATION_TIME = Integer.parseInt(new AppUtil().getSingleProperty("token.expires.in"));

    public static String issueToken(String username, UriInfo uriInfo) {
        String jwtToken = Jwts.builder()
                .setSubject(username)
                .setIssuer(uriInfo.getAbsolutePath().toString())
                .setIssuedAt(new Date())
                .setExpiration(toDate(LocalDateTime.now().plusMinutes(TOKEN_EXPIRATION_TIME)))
                .signWith(SignatureAlgorithm.HS512, generateEncryptionSecret())
                .compact();
        System.out.println("TokenUtl:issueToken generated token");// + jwtToken);
        return jwtToken;
    } // end: issueToken() method

    /**/
    public static Jws validateToken(String token) {
        Jws jws = null;
        try {
            jws = Jwts.parser().setSigningKey(generateEncryptionSecret()).parseClaimsJws(token);
        } catch (Exception e) {
            System.out.println("\nTokenUtil:validateToken #### INVALID TOKEN : " + token);
        }
        return jws;
    }

    private static Key generateEncryptionSecret() {
        return new SecretKeySpec(JWT_SECRET.getBytes(), 0, JWT_SECRET.getBytes().length, "DES"); //"AES"
    }

    /**/
    public static Credentials extractCredentials(String authString) {
        JSONObject obj = new JSONObject(authString);
        System.out.println("TokenUtil:extractCreds username: " + obj.getString("username"));
        return new Credentials(
                obj.getString("username"),
                obj.getString("password")
        );
        //System.out.println("TokenUtl:extractCredentials() username : "+credentials.getUsername()+" password : "+credentials.getPassword());
    }

    /**/
    private static Date toDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
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
    } // end: getUserEmailFromToken() method
    /**/
}