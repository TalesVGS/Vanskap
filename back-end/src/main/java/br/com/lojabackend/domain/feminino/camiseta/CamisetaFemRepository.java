package br.com.lojabackend.domain.feminino.camiseta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisetaFemRepository extends JpaRepository<CamisetaFeminina, Long> {
}
