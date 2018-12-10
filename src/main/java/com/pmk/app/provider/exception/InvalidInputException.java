package com.pmk.app.provider.exception;

import com.pmk.app.model.ErrorInfo;

import java.io.Serializable;
import java.util.List;

/**
 * Created by phil on 1/16/2018.
 */
public class InvalidInputException extends Exception implements Serializable {
    private static final long serialVersionUID = -5027121014723838738L;
    private List<ErrorInfo> errors;

    public List<ErrorInfo> getErrors() {
        return this.errors;
    }

    public InvalidInputException(List<ErrorInfo> errors) {
        super();
        this.errors = errors;
    }

    public InvalidInputException(String message, List<ErrorInfo> errors) {
        super(message);
        this.errors = errors;
    }

    public InvalidInputException(String message, Object errors) {
        super(message);
        this.errors = (List<ErrorInfo>)errors;
    }
}
