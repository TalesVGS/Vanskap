package br.com.lojabackend.domain.masculino.camiseta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisetaMascRepository extends JpaRepository<CamisetaMasculina, Long> {

    public List<CamisetaMasculina> findByOfertaTrue();
}
