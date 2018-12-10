package com.pmk.app.util;

import java.security.MessageDigest;
import java.util.Base64;

/**
 * Created by phil on 1/11/2018.
 * For use with JWT
 * https://github.com/agoncal/agoncal-sample-jaxrs/blob/master/04-JWT/src/main/java/org/agoncal/sample/jaxrs/jwt/util/PasswordUtils.java
 */
public class PasswordUtils {
    // ======================================
    // =          Business methods          =
    // ======================================

    public static String digestPassword(String plainTextPassword) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(plainTextPassword.getBytes("UTF-8"));
            byte[] passwordDigest = md.digest();
            return new String(Base64.getEncoder().encode(passwordDigest));
        } catch (Exception e) {
            throw new RuntimeException("Exception encoding password", e);
        }
    }
}
