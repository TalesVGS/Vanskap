import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
// import { CONTENT_ROUTES } from './shared/content.routes.routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: CONTENT_ROUTES,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
