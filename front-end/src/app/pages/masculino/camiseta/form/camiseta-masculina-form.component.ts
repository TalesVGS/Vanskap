import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AbstractFormComponent } from "src/app/core/components/abstract-form-component";
import Camiseta from "src/app/shared/Data/camiseta";
import { CamisetaMasculinaService } from "src/app/shared/services/camiseta-masculina.service";

@Component({
    selector: 'app-camiseta-masculina-form',
    templateUrl: './camiseta-masculina-form.component.html',
    styleUrls: ['./camiseta-masculina-form.component.css']
})
export class CamisetaMasculinaFormComponent extends AbstractFormComponent<Camiseta> {
    camisetasMasculinasForm: FormGroup;
    imagePath;
    imgURL: any = "../../../../../../assets/img/gallery/preview.jpg";
    message: string;
    addBtnLabel: string = "Cancelar";
    altPrev: boolean = false;
    savImg: boolean = true;

    onInit() {
        this.createForm();
        this.resultadoForm = this.camisetasMasculinasForm;
        this.navRoute = "/masculino/camisetas";
        if (this.route.snapshot.url[0].path == "alterar") {
            this.addBtnLabel = "Voltar";
            this.altPrev = true;
            this.savImg = false;
        }
    }

    constructor(
        protected service: CamisetaMasculinaService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected builder: FormBuilder
    ) {
        super(service, router, route, builder);
    }

    preview(files) {
        if (files.length === 0) return;

        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Apenas imagens são suportadas!";
            return;
        }

        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }

    imgUploadClick() {
        document.getElementById("Imagem").click();
        document
            .getElementById("Imagem")
            .addEventListener("change", (imgNome: any) => {
                this.nomeImg = imgNome.target.files[0].name;
                if (this.nomeImg.length > 100) {
                    this.message = "Nome muito comprido, por favor altere!";
                }
                this.savImg = true;
                this.altPrev = false;
                this.service.imgSettedVerify(false);
            });
    }
    createForm(): void {
        this.camisetasMasculinasForm = this.builder.group({
            id: null,
            nome: [null, [Validators.required, Validators.maxLength(120)]],
            marca: [null, [Validators.required, Validators.maxLength(60)]],
            tamanho: [null, [Validators.required, Validators.maxLength(3)]],
            valor: [null, [Validators.required, Validators.maxLength(13)]],
            descricao: [null, [Validators.maxLength(250)]],
            imageUrl: [null],
            oferta: [null],
        });
    }

}