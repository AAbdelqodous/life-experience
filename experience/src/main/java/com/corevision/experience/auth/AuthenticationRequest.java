package com.corevision.experience.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationRequest{
        @NotNull(message = "Email name is mandatory")
        @NotBlank(message = "Email name is mandatory")
        @Email(message = "Email is not formatted well")
        private String email;
        @NotNull(message = "Password name is mandatory")
        @NotBlank(message = "Password name is mandatory")
        @Size(min = 8, message = "Password should be 8 characters at least")
        private String password;
}
