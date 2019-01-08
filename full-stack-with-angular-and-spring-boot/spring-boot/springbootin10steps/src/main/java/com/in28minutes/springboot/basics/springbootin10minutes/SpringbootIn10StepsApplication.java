package com.in28minutes.springboot.basics.springbootin10minutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringbootIn10StepsApplication {

    public static void main (String [] args) {

//        SpringApplication.run(SpringbootIn10StepsApplication.class, args);

        ApplicationContext applicationContext = SpringApplication.run(SpringbootIn10StepsApplication.class, args);

        for (String name : applicationContext.getBeanDefinitionNames()) {
            System.out.println(name);
        }
    }
}
