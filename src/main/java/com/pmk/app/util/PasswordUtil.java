package com.pmk.app.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.ZoneId;

/**
 * 2018-12-22
 */
public class PasswordUtil {

    private static final AppUtil APP_UTIL = new AppUtil();

    /**/
    public static String getPasswordHash(String password) {
        String hash = generateHash(APP_UTIL.getSingleProperty("jwt.secret.key")+password);
        System.out.println("\nTokenUtl:getPasswordHash Creating "+hash+" from "+password);
        return hash;
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
}
