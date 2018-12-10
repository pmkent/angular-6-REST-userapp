package com.pmk.app.provider.exception;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

public class NotAuthorizedException extends WebApplicationException {
    public NotAuthorizedException(String message) {
        super(Response.status(401).type(MediaType.APPLICATION_JSON).entity(message).build());
    }
}
