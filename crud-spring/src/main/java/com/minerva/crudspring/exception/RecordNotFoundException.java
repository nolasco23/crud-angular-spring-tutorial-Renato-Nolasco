package com.minerva.crudspring.exception;

public class RecordNotFoundException extends RuntimeException {

    public RecordNotFoundException(Long id) {
        super("Course not exist with id: " + id);
    }
}
