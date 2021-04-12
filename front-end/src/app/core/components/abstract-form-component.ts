import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";
import { SnackBar1 } from "src/app/shared/componentes/snackbar/snackbar.component";

export abstract class AbstractFormComponent<T> implements OnInit {
    protected resultadoForm: FormGroup;
    protected action: string;
    protected navRoute: string;
    protected imgValid: boolean = true;
    nomeImg: string = "Selecione uma imagem!";
    nomePastImg: string;
    oferta: boolean = false;

    constructor(
        protected service: any,
        protected router: Router,
        protected route: ActivatedRoute,
        protected builder: FormBuilder,
        public snackBar: SnackBar1
    ) { }

    ngOnInit() {
        this.onInit();
        this.action = this.route.snapshot.url[0].path;
        if (this.action == "alterar") {
            this.setValue();
            this.service.imgSettedVerify(true);
        }
    }

    onInit() { }

    setValue() {
        const id = this.route.snapshot.url[1].path;
        this.service
            .findById(Number(id))
            .subscribe((response) => {
                this.resultadoForm.patchValue(response)
                if (response.oferta) {
                    this.onChange(response.oferta);
                    let radio1 = document.getElementById("inlineRadio1") as HTMLInputElement;
                    radio1.checked = true;
                }
            });
    }

    onSave(): void {
        this.resultadoForm.get("oferta").setValue(this.oferta);
        Object.keys(this.resultadoForm.controls).forEach((field) =>
            this.resultadoForm.get(field).markAllAsTouched()
        );

        let ImgFile = new FormData();
        const Imagem = (document.getElementById("Imagem") as HTMLInputElement)
            .files[0];

        ImgFile.append("file", Imagem);

        if (this.action == "alterar") {
            this.service.imgPastUrl(this.nomePastImg);
        }
        if (
            (this.resultadoForm.invalid || !Imagem) &&
            !this.service.imgSettedValue()
        ) {
            if (!Imagem) {
                this.imgValid = false;
            }
            return;
        }

        this.service
            .save(this.resultadoForm.value, ImgFile)
            .then((observable) =>
                observable.subscribe((response) =>
                    this.router.navigate([this.navRoute])
                )
            );

        this.openSnackBar();
    }

    onCancel(): void {
        this.router.navigate([this.navRoute]);
    }

    onChange(value) {
        this.oferta = value;
    }

    openSnackBar() {
        this.snackBar.openSnackBarSucess();
        if (this.action == "alterar") {
            this.snackBar.openSnackBarUpdate();
        }
    }

}
