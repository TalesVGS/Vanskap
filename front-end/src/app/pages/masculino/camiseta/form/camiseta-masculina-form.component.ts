import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-camiseta-masculina-form',
    templateUrl: './camiseta-masculina-form.component.html',
    styleUrls: ['./camiseta-masculina-form.component.css']
})
export class CamisetaMasculinaFormComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit(): void {
        
    }

}