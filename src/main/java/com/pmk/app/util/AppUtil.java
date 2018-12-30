package com.pmk.app.util;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
            return props.getProperty(prop);
            //String val = props.getProperty(prop);
            //System.out.println(":>: "+prop+" Property value is : "+val);
            //return val;
        } catch (IOException ex) {
            System.out.println("Could not obtain property "+prop+" of "+filename);
        }
        return null;
    }

    /*
     * 2017-1-01
     * TODO: Move to date utilities.
     */
    public Date getFormattedDate(String dateString) {
        SimpleDateFormat formatter = new SimpleDateFormat("M-dd-yyyy");
        Date date = null;
        try {
            date = formatter.parse(dateString);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    } // end: getDateFromFormattedString() method.

}
