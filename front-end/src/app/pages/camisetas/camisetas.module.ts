import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [CamisetasListComponent],
    imports: [CommonModule, CamisetasRoutingModule, ReactiveFormsModule, FormsModule, SharedModule],
    providers: [CamisetasService],
})
export class CamisetasModule {}