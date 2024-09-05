package com.corevision.experience.auth;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

public interface AuthenticationService {
    void register(RegistrationRequest request) throws MessagingException;

    AuthenticationResponse authenticate(@Valid AuthenticationRequest request);

    void activateAccount(String token) throws MessagingException;
}
