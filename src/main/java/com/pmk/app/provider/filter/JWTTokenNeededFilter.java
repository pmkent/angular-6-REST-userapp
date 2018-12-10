package com.pmk.app.provider.filter;

import com.pmk.app.util.TokenUtil;


import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;
import com.sun.jersey.spi.inject.Inject;
import io.jsonwebtoken.Jwts;

import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.util.logging.Logger;

/**
 * Created by phil on 1/19/2018.
 */
@Provider
@JWTTokenNeeded
public class JWTTokenNeededFilter implements ContainerRequestFilter {
    //@Inject
    private Logger logger = Logger.getLogger("JWTTokenNeededFilter");

    private TokenUtil tokenUtil = new TokenUtil();

    @Override
    public ContainerRequest filter(ContainerRequest containerRequest) {
        logger.info("\n\nJWTTokenNeededFilter.filter() starting\n");

        // Get the HTTP Authorization header from the request
        String authorizationHeader = containerRequest.getHeaderValue("x-access-token");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            logger.info("#### INvalid authorizationHeader is null : " + authorizationHeader);
            logger.info("getRequestHeader "+containerRequest.getRequestHeader("x-access-token"));
            logger.info("getHeaderValue "+containerRequest.getHeaderValue("x-access-token"));
            logger.info("getMethod "+containerRequest.getMethod());
            logger.info("getPath "+containerRequest.getPath());
            logger.info("getPath(true) "+containerRequest.getPath(true));
            logger.info("getPath(false) "+containerRequest.getPath(false));
            logger.info("toString "+containerRequest.toString());

            logger.info("isSecure() "+containerRequest.isSecure());
            logger.info("getProperties() "+containerRequest.getProperties());
        } else {

            // Extract the token from the HTTP Authorization header
            String token = authorizationHeader.substring("Bearer".length()).trim();
            boolean validated = tokenUtil.verifyToken(token);
            logger.info("#### valid authorizationHeader : " + authorizationHeader);
            logger.info("#### validated? : " + validated);
            logger.info("#### validated? : " + validated);
        }
        return containerRequest;
    }
}
