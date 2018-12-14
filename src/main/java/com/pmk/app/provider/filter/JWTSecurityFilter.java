package com.pmk.app.provider.filter;

import com.pmk.app.util.TokenUtil;
import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;

/**
 * 201812-10
 */
public class JWTSecurityFilter implements ContainerRequestFilter {
    @Override
    public ContainerRequest filter(ContainerRequest containerRequest) {

        // Get the HTTP Authorization header from the request
        String authorizationHeader = containerRequest.getHeaderValue("Authorization");

        // Check if the HTTP Authorization header is present and formatted correctly
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            System.out.println("JWTSecurityFilter: #### invalid authorizationHeader : " + authorizationHeader);

            URI uri = containerRequest.getRequestUri();

            // Automatically allow certain requests.
            String method = containerRequest.getMethod();
            if (method.equals("POST") && uri.getRawPath().endsWith("auth")) {// Let auth URI through to obtain JWT token
                System.out.println("JWTSecurityFilter: No auth header. Method : "+method+" URI : "+uri.getPath()+". Letting auth through!");
                return containerRequest;
            } else {
                System.out.println("JWTSecurityFilter: Doing nothing for method : "+method);
                throw new WebApplicationException(
                        Response.status(401).type(MediaType.APPLICATION_JSON).entity("Invalid token. Authorization required").build()
                );
            }
        }

        // Extract the token from the HTTP Authorization header
        if (TokenUtil.validateToken(authorizationHeader.substring("Bearer".length()).trim()) == null) { //  if (!TokenUtil.validateToken(authorizationHeader.substring("Bearer".length()).trim())) {
            System.out.println("JWTSecurityFilter: INVALID TOKEN");
            throw new WebApplicationException(Response.Status.UNAUTHORIZED);
        }
        return containerRequest;
    }
}
