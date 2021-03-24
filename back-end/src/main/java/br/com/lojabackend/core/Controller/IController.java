package br.com.lojabackend.core.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public interface IController<C> {

    ResponseEntity<?> findAll();

    ResponseEntity<?> save(@Validated @RequestBody C object, Errors errors);

    ResponseEntity<?> update(@Validated @RequestBody C object, Errors errors);

    ResponseEntity<?> findOne(@PathVariable Long id);

    ResponseEntity<?> deleteById(@PathVariable Long id);
}
