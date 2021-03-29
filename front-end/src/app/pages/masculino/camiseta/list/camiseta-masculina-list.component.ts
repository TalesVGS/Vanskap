import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogComponent } from "src/app/shared/componentes/dialog/dialog.component";
import { SnackBar1 } from "src/app/shared/componentes/snackbar/snackbar.component";
import { AbstractListComponent } from "src/app/core/components/abstract-list-component";
import Camiseta from "src/app/shared/Data/camiseta";
import { CamisetaMasculinaService } from "src/app/shared/services/camiseta-masculina.service";

@Component({
    selector: 'app-camiseta-masculina-list',
    templateUrl: './camiseta-masculina-list.component.html',
    styleUrls: ['./camiseta-masculina-list.component.css']
})
export class CamisetaMasculinaListComponent extends AbstractListComponent<Camiseta> {

    protected resultados: Camiseta[];

    constructor(
        protected service: CamisetaMasculinaService,
        protected route: ActivatedRoute,
        public router: Router,
        public dialog: DialogComponent,
        public snackBar: SnackBar1
    ) {
        super(service, route);
    }

    onListar() {
        this.service
            .findAll()
            .subscribe((resultados) => (this.resultados = resultados));
    }

    deleteById(camiseta: Camiseta): void {
        this.service.deteleById(camiseta.id).subscribe(() => {
            this.service.deleteImg(camiseta.imageUrl);
            this.onListar();
        });
    }

    openModal(camiseta) {
        this.dialog.openDialog();
        document.getElementById("btn-delete-camiseta-masculina").addEventListener('click', () => {
            this.deleteById(camiseta), this.snackBar.openSnackBarDelete();
        });
    }

}