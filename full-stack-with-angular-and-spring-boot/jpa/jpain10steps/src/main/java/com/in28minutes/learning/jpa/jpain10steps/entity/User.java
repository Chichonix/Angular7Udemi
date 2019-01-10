package com.in28minutes.learning.jpa.jpain10steps.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

// Table - User
@Entity
@Data
public class User {

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String role;

    public User() {
    }

    public User(String name, String role) {
        this.name = name;
        this.role = role;
    }
}
