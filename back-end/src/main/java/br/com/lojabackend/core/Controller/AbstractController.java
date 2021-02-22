package br.com.lojabackend.core.Controller;

import br.com.lojabackend.core.Service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

public abstract class AbstractController<C> extends ResponseAbstractController implements IController<C> {

    @Autowired
    private IService<C> service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return jsonResponse(service.findAll());
    }

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody C object, Errors errors) {
        return jsonResponse(service.save(object, errors));
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody C object, Errors errors) {
        return jsonResponse(service.save(object, errors));
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findOne(@PathVariable long id) {
        return jsonResponse(service.findById(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id) {
        service.deleteById(id);
        return jsonResponse();
    }
}
