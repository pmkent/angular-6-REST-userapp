package com.pmk.app.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * 2018-12-10
 */
public class AppUtil {

    private Properties props = new Properties();

    public String getSingleProperty(String prop) {
        String filename = "config.properties";
        try (InputStream input = this.getClass().getClassLoader().getResourceAsStream(filename)) {
            props.load(input);
            String val = props.getProperty(prop);
            System.out.println(":>: "+prop+" Property value is : "+val);
            return val;
        } catch (IOException ex) {
            System.out.println("Could not obtain properties file for "+prop);
        }
        return null;
    }

}
