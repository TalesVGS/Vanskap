import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DialogComponent } from "src/app/shared/componentes/dialog/dialog.component";
import Camiseta from "src/app/pages/camiseta";
import { CamisetaMasculinaService } from "../camiseta-masculina.service";
import { SnackBar1 } from "src/app/shared/componentes/snackbar/snackbar.component";

@Component({
    selector: 'app-camiseta-masculina-list',
    templateUrl: './camiseta-masculina-list.component.html',
    styleUrls: ['./camiseta-masculina-list.component.css']
})
export class CamisetaMasculinaListComponent implements OnInit {
    constructor(
        public router: Router,
        private camisetaMasculinaService: CamisetaMasculinaService,
        public dialog: DialogComponent,
        public snackBar: SnackBar1
    ) { }

    camisetas: Camiseta[] = [];

    ngOnInit(): void {
        this.findAllCamiseta();
    }

    findAllCamiseta(): void {
        this.camisetaMasculinaService.findAll()
        .subscribe((response) => (this.camisetas = response));
    }

    deleteById(camiseta): void {
        this.camisetaMasculinaService.deleteById(camiseta.id).subscribe(() => {
            this.camisetaMasculinaService.deleteImage(camiseta.imageUrl).subscribe(() => {});
            this.findAllCamiseta();
        });
    }

    openModal(camiseta) {
        this.dialog.openDialog();
        document.getElementById("btn-delete-camiseta-masculina").addEventListener('click', () => {
           this.deleteById(camiseta), this.snackBar.openSnackBarDelete();
        });
    }

}