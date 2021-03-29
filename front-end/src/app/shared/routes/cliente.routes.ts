import { Routes } from "@angular/router";

export const CLIENTE_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../../pages/inicio/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'masculino/camisetas',
        loadChildren: () =>
            import('../../pages/masculino/camiseta/camiseta-masculina.module').then((m) => m.CamisetaMasculinaModule),
    },
];