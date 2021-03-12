import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import Camiseta from "src/app/pages/camiseta";
import { CamisetaMasculinaService } from "../camiseta-masculina.service";
import { CamisetaMasculinaListComponent } from "../list/camiseta-masculina-list.component";

@Component({
    selector: 'app-camiseta-masculina-form',
    templateUrl: './camiseta-masculina-form.component.html',
    styleUrls: ['./camiseta-masculina-form.component.css']
})
export class CamisetaMasculinaFormComponent implements OnInit {
    constructor(
        public router: Router,
        private builder: FormBuilder,
        private camisetaMasculinaService: CamisetaMasculinaService,
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
    ) { }

    camisetasMasculinasForm: FormGroup;
    action: string;
    selectedImage: File;
    urlImage;
    Camiseta: CamisetaMasculinaListComponent

    ngOnInit(): void {
        document.getElementById("preview-image").hidden = true;

        this.createForm();
        this.action = this.activatedRoute.snapshot.url[0].path;
        if (this.action == 'alterar') {
            this.setValue();
        }
    }

    setValue() {
        const id = this.activatedRoute.snapshot.url[1].path;

        this.camisetaMasculinaService
            .findById(Number(id))
            .subscribe((response) => this.camisetasMasculinasForm.patchValue(response));
    }

    createForm(): void {
        this.camisetasMasculinasForm = this.builder.group({
            id: null,
            nome: [null, [Validators.required, Validators.maxLength(120)]],
            marca: [null, [Validators.required, Validators.maxLength(60)]],
            tamanho: [null, [Validators.required, Validators.maxLength(3)]],
            valor: [null, [Validators.required, Validators.maxLength(13)]],
            descrição: [null, [Validators.maxLength(250)]],
            imageUrl: [null, [Validators.required]]
        });
    }

    onFileChange(event: Event) {
        this.selectedImage = (event.target as HTMLInputElement).files[0];

        document.getElementById("preview-image").hidden = false;
        let reader = new FileReader();
        reader.readAsDataURL(this.selectedImage);
        reader.onload = (read: any) => {
            this.urlImage = this.sanitizer.bypassSecurityTrustUrl(read.target.result as any);
        }
    }

    Cancel(): void {
        this.router.navigate(['/masculino/camisetas']);
    }

    async Save(value: Camiseta): Promise<void> {
        Object.keys(this.camisetasMasculinasForm.controls).forEach(field =>
            this.camisetasMasculinasForm.get(field).markAllAsTouched()
        );

        if (this.camisetasMasculinasForm.invalid) {
            return;
        } 

        (await this.camisetaMasculinaService
            .save(value, this.selectedImage))
            .subscribe(data => {this.camisetasMasculinasForm.reset(), document.getElementById("preview-image").hidden = true; })
            
    }

    justNumbers(event): void {
        const { value } = event.target;
        this.camisetasMasculinasForm.get('valor')
            .setValue(value.replace(/\D/g, ''));
    }

}