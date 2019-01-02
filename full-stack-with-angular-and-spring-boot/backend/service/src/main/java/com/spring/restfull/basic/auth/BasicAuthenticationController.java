package com.spring.restfull.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Controller
@CrossOrigin(origins = "http://localhost:4200") // Para permitir request desde otros servidores (localhost:4200)
@RestController
public class BasicAuthenticationController {

    // basic-authentication-bean
    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticationBean(){
        // throw new RuntimeException("Some Error has Happend! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticate");
    }
}
