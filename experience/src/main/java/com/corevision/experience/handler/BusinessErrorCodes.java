package com.corevision.experience.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

public enum BusinessErrorCodes {
    NO_CODE(0, NOT_IMPLEMENTED, "No code"),
    INCORRECT_CURRENT_PASSWORD(300, BAD_REQUEST, "Current password is incorrect"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, BAD_REQUEST, "Current password does not matched"),
    ACCOUNT_LOCKED(302, FORBIDDEN, "Account has been locked"),
    ACCOUNT_DISABLED(303, FORBIDDEN, "Account has been disabled"),
    BAD_CREDENTIALS(304, FORBIDDEN, "Login email and / or password is not correct"),
    ;
    @Getter
    private final int errorCode;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int errorCode, HttpStatus httpStatus, String description) {
        this.errorCode = errorCode;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
