import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisetasRoutingModule } from "./camisetas-routing.module";
import { CamisetasFormComponent } from "./form/camisetas-form.component";
import { CamisetasListComponent } from "./list/camisetas-list.component";

@NgModule({
    declarations: [CamisetasListComponent, CamisetasFormComponent],
    imports: [CommonModule, CamisetasRoutingModule, ReactiveFormsModule, FormsModule, SharedModule],
    providers: [],
})
export class CamisetasModule {}