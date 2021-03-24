package br.com.lojabackend.domain.masculino.camiseta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.lojabackend.core.Controller.AbstractController;

@RestController
@RequestMapping("/camisetas/masculino")
public class CamisetaMascController extends AbstractController<CamisetaMasculina> {

    @Autowired
    private CamisetaMascRepository repository;

    @GetMapping("/ofertas")
    public ResponseEntity<?> findAllByOfertas() {
        return jsonResponse(repository.findByOfertaTrue());
    }

}
