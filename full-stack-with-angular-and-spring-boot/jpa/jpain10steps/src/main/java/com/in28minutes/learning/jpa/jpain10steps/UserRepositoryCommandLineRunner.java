package com.in28minutes.learning.jpa.jpain10steps;

import com.in28minutes.learning.jpa.jpain10steps.entity.User;
import com.in28minutes.learning.jpa.jpain10steps.service.UserDAOService;
import com.in28minutes.learning.jpa.jpain10steps.service.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@Component
public class UserRepositoryCommandLineRunner implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(UserRepositoryCommandLineRunner.class);

    @Autowired
    private UserRepository userRepository;

    // New user is created: User(id=1, name=Jack, role=Admin)

    @Override
    public void run(String... args) throws Exception {
        User user = new User("Jill", "Admin");
        this.userRepository.save(user);
        log.info("New user is created: " + user);

        Optional<User> userWithIdOne = this.userRepository.findById(1L);
        log.info("User is retrieved: " + userWithIdOne);

        List<User> users = this.userRepository.findAll();
        log.info("All Users: " + users);
    }
}
