import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
    selector: 'snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.css']
})
export class SnackBar1 {

    constructor(
        public snackBar: MatSnackBar
    ) {}

    openSnackBarSucess() {
        this.snackBar.openFromComponent(SnackBarSucess, {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
        });
    }

    openSnackBarUpdate() {
        this.snackBar.openFromComponent(SnackBarUpdate, {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
        });
    }

}

@Component({
    selector: 'snackbar-sucess',
    template: `
    <div>
        Camiseta Cadastrada com Sucesso!
    </div>
    `
})
export class SnackBarSucess {}


@Component({
    selector: 'snackbar-update',
    template: `
    <div>
        Camiseta Alterada com Sucesso!
    </div>
    `
})
export class SnackBarUpdate {}
