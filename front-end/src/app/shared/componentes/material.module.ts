import { NgModule } from "@angular/core";
import { MatDialogModule, MatTooltipModule } from "@angular/material";
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule
];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule { }