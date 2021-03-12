package br.com.lojabackend.domain.masculino.camiseta;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "camisetas_masculino")
@Getter
@Setter
public class CamisetaMasculina implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "nome")
    private String nome;

    @NotEmpty
    @NotBlank
    @Size(max = 40)
    @Column(name = "marca")
    private String marca;

    @NotEmpty
    @NotBlank
    @Size(max = 3)
    @Column(name = "tamanho")
    private String tamanho;

    @NotEmpty
    @NotBlank
    @Size(max = 13)
    @Column(name = "valor")
    private String valor;

    @Column(name = "imagem")
    private String imageUrl; 


}
