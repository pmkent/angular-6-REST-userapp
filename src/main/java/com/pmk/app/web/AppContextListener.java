package com.pmk.app.web;

import com.mongodb.MongoClient;
import com.pmk.app.dao.IUserRepository;
import com.pmk.app.dao.IUserRoleRepository;
import com.pmk.app.service.UserService;
import com.pmk.app.util.AppUtil;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Created by phil on 1/15/2018.
 */
public class AppContextListener implements ServletContextListener {
    private static final AppUtil APP_UTIL = new AppUtil();

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        initJongoMongoDb();
        try {
            ServletContext servletContext = servletContextEvent.getServletContext();
            //servletContext.setAttribute("userService",new UserService());
            servletContext.setAttribute("userService",new UserService(getUserCollection(),getUserRoleCollection()));
        } catch (Exception e) {
            System.out.println("\nAppContextListener:contextInitialized Error "+e+"\n");
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
    }

    /***  mongoDb ***/
    private Jongo jongo;
    private final String mongoDbName = APP_UTIL.getSingleProperty("mongo.db.name");
    private MongoCollection mongoCollection;

    /**/
    private void initJongoMongoDb() {
        System.out.println("\nAppContextListener:Using DB "+mongoDbName+"\n");
        MongoClient mongoClient = new MongoClient();
        jongo = new Jongo(mongoClient.getDB(mongoDbName));
    }

    /**/
    private IUserRepository getUserCollection() {
        mongoCollection = jongo.getCollection("user");
        mongoCollection.ensureIndex("{userId:1}","{unique:true}");
        return new IUserRepository(mongoCollection);
    }

    /**/
    private IUserRoleRepository getUserRoleCollection() {
        mongoCollection = jongo.getCollection("user_role");
        mongoCollection.ensureIndex("{userRoleId : 1}","{unique : true}");
        return new IUserRoleRepository(mongoCollection);
    }
}
