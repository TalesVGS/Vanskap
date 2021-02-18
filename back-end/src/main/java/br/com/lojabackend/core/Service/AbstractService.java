package br.com.lojabackend.core.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public class AbstractService<C> implements IService<C> {

    @Autowired
    protected JpaRepository<C, Long> repository;

    public List<C> findAll() {
        return repository.findAll();
    }
}
