package br.com.lojabackend.domain.masculino.camiseta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisetaMascRepository extends JpaRepository<CamisetaMasculina, Long> {
}
