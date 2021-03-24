package br.com.lojabackend.core.Service;

import org.springframework.validation.Errors;

import java.util.List;

public interface IService<C> {

    List<C> findAll();

    C save(C object, Errors errors);

    C findById(Long id);

    void deleteById(Long id);
}
