import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';

import { ADMINISTRADOR_ROUTES } from './shared/routes/administrador.routes';
import { CLIENTE_ROUTES } from './shared/routes/cliente.routes';


const routes: Routes = [
  {
    path: "",
    component: ContentLayoutComponent,
    children: CLIENTE_ROUTES,
  },
  {
    path: "administrador",
    component: ContentLayoutComponent,
    children: ADMINISTRADOR_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
