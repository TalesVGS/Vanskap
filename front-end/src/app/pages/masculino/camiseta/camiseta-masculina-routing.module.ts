import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisetaMasculinaListComponent } from "./list/camiseta-masculina-list.component";

const routes: Routes = [
    {
        path: '',
        component: CamisetaMasculinaListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CamisetaMasculinaRoutingModule {}