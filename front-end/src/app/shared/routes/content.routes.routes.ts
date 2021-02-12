import { Routes } from "@angular/router";

export const CONTENT_ROUTES: Routes = [
    {
        path: 'camisetas',
        loadChildren: () =>
            import('../../pages/camisetas/camisetas.module').then((m) => m.CamisetasModule),
    },
];