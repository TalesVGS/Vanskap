import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisetaMasculinaRoutingModule } from "./camiseta-masculina-routing.module";
import { CamisetaMasculinaListComponent } from "./list/camiseta-masculina-list.component";

@NgModule({
    declarations: [CamisetaMasculinaListComponent],
    imports: [CommonModule, CamisetaMasculinaRoutingModule, ReactiveFormsModule, FormsModule, SharedModule],
    providers: [],
})
export class CamisetaMasculinaModule {}