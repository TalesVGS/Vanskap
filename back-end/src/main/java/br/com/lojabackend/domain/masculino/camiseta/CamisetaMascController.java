package br.com.lojabackend.domain.masculino.camiseta;

import br.com.lojabackend.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/camisetas/masculino")
public class CamisetaMascController extends AbstractController<CamisetaMasculina> {
}
