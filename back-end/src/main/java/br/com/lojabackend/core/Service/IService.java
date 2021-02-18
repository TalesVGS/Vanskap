package br.com.lojabackend.core.Service;

import java.util.List;

public interface IService<C> {

    List<C> findAll();
}
