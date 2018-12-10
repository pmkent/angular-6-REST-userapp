package com.pmk.app.provider.exception;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 * Created by phil on 1/16/2018.
 */
@Provider
public class InvalidInputExceptionMapper implements ExceptionMapper<InvalidInputException> {
    @Override
    @Produces(MediaType.APPLICATION_JSON)
    public Response toResponse(InvalidInputException e) {
        Response.ResponseBuilder responseBuilder = Response.status(Response.Status.BAD_REQUEST);
        responseBuilder.entity(e.getErrors());
        return responseBuilder.build();
    }
}
