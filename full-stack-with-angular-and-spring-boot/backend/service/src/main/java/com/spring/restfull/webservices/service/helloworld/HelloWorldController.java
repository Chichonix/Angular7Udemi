package com.spring.restfull.webservices.service.helloworld;

//import com.spring.restfull.webservices.model.helloworld.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
@CrossOrigin(origins = "http://localhost:4200") // Para permitir request desde otros servidores (localhost:4200)
@RestController
public class HelloWorldController {

    // GET
    // URI - /hello-world
    // method - "Hello World"
    // @RequestMapping(method= RequestMethod.GET, path = "/hello-world")
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
        return "Hello World!";
    }

    // hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        // throw new RuntimeException("Some Error has Happend! Contact Support at ***-***");
        return new HelloWorldBean("Hello World Bean!");
    }

    // hello-world-bean/path-variable/in28minutes
    @GetMapping(path = "/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s!", name));
    }
}
