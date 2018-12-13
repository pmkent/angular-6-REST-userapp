package com.pmk.app.rest;

import com.pmk.app.model.User;
import com.pmk.app.service.UserService;

import javax.servlet.ServletContext;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.util.List;


/**
 * Created by phil on 1/14/2018.
 */
@Path("/user")
public class UserEndpoint {

    @Context
    private UriInfo uriInfo;

    @Context
    private ServletContext servletContext;

    private UserService getUserService() {
        return (UserService) servletContext.getAttribute("userService");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers(@HeaderParam("Authorization") String authorization) {
        System.out.println("UsrREST:getUsers: jwt : >"+authorization+"<");
        List<User> usrLst = getUserService().getUsers(authorization);
        if ( (usrLst.size() == 1) && (usrLst.get(0).getId() == 0) ) // Poor error handling
            return Response.status(500).entity("io.jsonwebtoken.ExpiredJwtException: JWT expired").build();
        else
            return Response.ok(usrLst).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/login")
    public Response authenticate(String credentials) {
        User user = getUserService().authenticate(credentials,uriInfo);
        return Response.status(200).entity(user).build();
    }

    @GET
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") String id) {
        return Response.status(200).entity(getUserService().getUserById(id)).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addUser(User user) {
        System.out.println("UsrREST:addUser() Creating new use : "+user);
        User newUser = getUserService().addUser(user);
        System.out.println("Just created new user : "+newUser);

        return Response.status(201).entity(user).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateUser(User user) {
        System.out.println("UsrREST:updateUser() : "+user);
        getUserService().updateUser(user);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteUser(@PathParam("id") String id) {
        return Response.ok(getUserService().deleteUser(id)).build();
    }
}
