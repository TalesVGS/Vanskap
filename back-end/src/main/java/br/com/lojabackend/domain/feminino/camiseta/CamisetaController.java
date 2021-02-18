package br.com.lojabackend.domain.feminino.camiseta;

import br.com.lojabackend.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/camiseta")
public class CamisetaController extends AbstractController<Camiseta> {
}
