import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DialogComponent } from "src/app/shared/componentes/dialog/dialog.component";
import Camiseta from "src/app/pages/camiseta";
import { CamisetaMasculinaService } from "../camiseta-masculina.service";

@Component({
    selector: 'app-camiseta-masculina-list',
    templateUrl: './camiseta-masculina-list.component.html',
    styleUrls: ['./camiseta-masculina-list.component.css']
})
export class CamisetaMasculinaListComponent implements OnInit {
    constructor(
        public router: Router,
        private camisetaMasculinaService: CamisetaMasculinaService,
        public dialog: DialogComponent
    ) { }

    camisetas: Camiseta[] = [];

    ngOnInit(): void {
        this.findAllCamiseta();
    }

    findAllCamiseta(): void {
        this.camisetaMasculinaService.findAll()
        .subscribe((response) => (this.camisetas = response));
    }

    deleteById(id: number): void {
        this.camisetaMasculinaService.deleteById(id).subscribe(() => this.findAllCamiseta());
    }

    openModal() {
        this.dialog.openDialog();
    }

}