package com.pmk.app.web;

import com.pmk.app.service.UserService;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Created by phil on 1/15/2018.
 */
public class AppContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        try {
            ServletContext servletContext = servletContextEvent.getServletContext();
            servletContext.setAttribute("userService",new UserService());
        } catch (Exception e) {
            System.out.println("\nAppContextListener:contextInitialized Error "+e+"\n");
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
    }
}
