import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { SnackBar1, SnackBarSucess, SnackBarUpdate } from "src/app/material/snackbar/snackbar.component";
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
        SnackBarUpdate
    ],
    entryComponents: [SnackBarSucess, SnackBarUpdate],
    imports: [
        CommonModule,
        CamisetaMasculinaRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        MaterialModule
    ],
    providers: [CamisetaMasculinaService, SnackBarSucess, SnackBar1, SnackBarUpdate],
})
export class CamisetaMasculinaModule {}