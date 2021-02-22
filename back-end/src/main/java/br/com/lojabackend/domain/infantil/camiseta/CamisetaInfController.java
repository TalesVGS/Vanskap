package br.com.lojabackend.domain.infantil.camiseta;

import br.com.lojabackend.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/camisetas/infantil")
public class CamisetaInfController extends AbstractController<CamisetaInfantil> {
}
