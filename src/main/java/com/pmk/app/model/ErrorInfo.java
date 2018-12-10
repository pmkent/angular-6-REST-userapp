package com.pmk.app.model;

/**
 * Created by phil on 1/16/2018.
 */
public class ErrorInfo {
    private String code;
    private String field;
    private String message;
    private String info;

    public ErrorInfo() {}

    public ErrorInfo(
            String code,
            String field,
            String message,
            String info
    ) {
        this.code = code;
        this.field = field;
        this.message = message;
        this.info = info;
    }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getField() { return field; }
    public void setField(String field) { this.field = field; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getInfo() { return info; }
    public void setInfo(String info) { this.info = info; }


}
