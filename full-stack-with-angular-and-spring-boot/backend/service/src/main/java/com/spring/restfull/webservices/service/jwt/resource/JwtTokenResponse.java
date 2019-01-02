package com.spring.restfull.webservices.service.jwt.resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {

  private static final long serialVersionUID = 8317676219297719109L;

  private final String token;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU0NzAzNTI5NSwiaWF0IjoxNTQ2NDMwNDk1fQ.ws_bVFgjBUlT9xJla29xb_aCsnOEvMu4HG7s0-jhTj-6Y3jl33myvDtelYw5WSuVKe8edltPP0vo8P9_TnLS5A"
//    }

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}
