package com.corevision.experience.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegistrationRequest(
        @NotNull(message = "First name is mandatory")
        @NotBlank(message = "First name is mandatory")
        String firstname,
        @NotNull(message = "Last name is mandatory")
        @NotBlank(message = "Last name is mandatory")
        String lastname,
        @NotNull(message = "Email name is mandatory")
        @NotBlank(message = "Email name is mandatory")
        @Email(message = "Email is not formatted well")
        String email,
        @NotNull(message = "Password name is mandatory")
        @NotBlank(message = "Password name is mandatory")
        @Size(min = 8, message = "Password should be 8 characters at least")
        String password
) {
}
