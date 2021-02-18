package br.com.lojabackend.core.Controller;

import br.com.lojabackend.core.Service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public abstract class AbstractController<C> extends ResponseAbstractController implements IController<C> {

    @Autowired
    private IService<C> service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return jsonResponse(service.findAll());
    }



}
