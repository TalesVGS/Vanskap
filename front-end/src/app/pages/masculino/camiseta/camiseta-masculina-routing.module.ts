import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisetaMasculinaFormComponent } from "./form/camiseta-masculina-form.component";
import { CamisetaMasculinaListComponent } from "./list/camiseta-masculina-list.component";

const routes: Routes = [
    {
        path: '',
        component: CamisetaMasculinaListComponent,
    },
    {
        path: 'nova',
        component: CamisetaMasculinaFormComponent,
    },
    {
        path: 'alterar/:id',
        component: CamisetaMasculinaFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CamisetaMasculinaRoutingModule {}