import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        CarouselModule
    ],
    providers: [],
})
export class HomeModule { }