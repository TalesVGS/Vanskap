package br.com.lojabackend.core.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.validation.Errors;

import java.util.List;

public class AbstractService<C> implements IService<C> {

    @Autowired
    protected JpaRepository<C, Long> repository;

    public List<C> findAll() {
        return repository.findAll();
    }

    public C save(C object, Errors errors) {
        return repository.save(object);
    }

    public C findById(Long id) {
        return repository.findById(id).get();
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
