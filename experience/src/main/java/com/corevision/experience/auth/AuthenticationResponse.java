package com.corevision.experience.auth;

import lombok.Data;

public record AuthenticationResponse(
        String token
) {
    // Static builder method
    public static Builder builder() {
        return new Builder();
    }

    // Custom builder class
    public static class Builder {
        private String token;

        public Builder token(String token) {
            this.token = token;
            return this;
        }

        public AuthenticationResponse build() {
            return new AuthenticationResponse(token);
        }
    }
}
