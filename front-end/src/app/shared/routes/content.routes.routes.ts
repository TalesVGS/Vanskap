import { Routes } from "@angular/router";

export const CONTENT_ROUTES: Routes = [
    {
        path: 'masculino/camisetas',
        loadChildren: () =>
            import('../../pages/masculino/camiseta/camiseta-masculina.module').then((m) => m.CamisetaMasculinaModule),
    },
];