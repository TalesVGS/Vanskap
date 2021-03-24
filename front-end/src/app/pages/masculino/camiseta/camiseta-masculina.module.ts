import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogExampleComponent } from "src/app/shared/componentes/dialog-camisetas/dialog-example.component";
import { DialogComponent } from "src/app/shared/componentes/dialog/dialog.component";
import { MaterialModule } from "src/app/shared/componentes/material.module";
import { SnackBar1, SnackBarDelete, SnackBarSucess, SnackBarUpdate } from "src/app/shared/componentes/snackbar/snackbar.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisetaMasculinaRoutingModule } from "./camiseta-masculina-routing.module";
import { CamisetaMasculinaService } from "./camiseta-masculina.service";
import { CamisetaMasculinaFormComponent } from "./form/camiseta-masculina-form.component";
import { CamisetaMasculinaListComponent } from "./list/camiseta-masculina-list.component";

@NgModule({
    declarations: [
        CamisetaMasculinaListComponent, 
        CamisetaMasculinaFormComponent, 
        SnackBarSucess, 
        SnackBar1,
        SnackBarUpdate,
        DialogExampleComponent,
        DialogComponent,
        SnackBarDelete
    ],
    entryComponents: [
        SnackBarSucess,
        SnackBarUpdate,
        DialogExampleComponent,
        SnackBarDelete
    ],
    imports: [
        CommonModule,
        CamisetaMasculinaRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        MaterialModule
    ],
    providers: [
        CamisetaMasculinaService,
        SnackBarSucess,
        SnackBar1,
        SnackBarUpdate,
        DialogExampleComponent,
        DialogComponent,
        SnackBarDelete
    ],
})
export class CamisetaMasculinaModule {}