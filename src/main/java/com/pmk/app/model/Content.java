package com.pmk.app.model;

/**
 * Created by phil on 1/17/2018.
 */
public class Content {
    private User user;
    private boolean success;
    private String message;
    private String token;

    public Content() {}

    public Content(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public Content(User user, boolean success, String message, String token) {
        this.user = user;
        this.success = success;
        this.message = message;
        this.token = token;
    }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
}
