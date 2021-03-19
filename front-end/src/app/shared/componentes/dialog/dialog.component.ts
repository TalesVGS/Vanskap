import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog"
import { DialogExampleComponent } from "src/app/shared/componentes/dialog-camisetas/dialog-example.component";

@Component({
    selector:'dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    constructor(public dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(DialogExampleComponent);
    }
}
