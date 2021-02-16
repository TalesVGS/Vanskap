import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisetasFormComponent } from "./form/camisetas-form.component";
import { CamisetasListComponent } from "./list/camisetas-list.component";

const routes: Routes = [
    {
        path: '',
        component: CamisetasListComponent,
    },
    {
        path: 'novo',
        component: CamisetasFormComponent,
    },
    {
        path: 'alterar/:id',
        component: CamisetasFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CamisetasRoutingModule {}