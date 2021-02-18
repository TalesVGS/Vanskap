package br.com.lojabackend.core.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseAbstractController {

    protected ResponseEntity<?> jsonResponse(Object object, HttpStatus status) {
        return new ResponseEntity<>(object, status);
    }


}
