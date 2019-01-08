package com.in28minutes.springboot.basics.springbootin10minutes;

import lombok.Data;

@Data
public class Book {
    long id;
    String name;
    String author;

    public Book(long id, String name, String author) {
        super();
        this.id = id;
        this.name = name;
        this.author = author;
    }
}
