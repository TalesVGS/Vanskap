package br.com.lojabackend.domain.infantil.camiseta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisetaInfRepository extends JpaRepository<CamisetaInfantil, Long> {
}
