package br.com.lojabackend.core.Controller;

import org.springframework.http.ResponseEntity;

public interface IController<C> {

    ResponseEntity<?> findAll();

}
