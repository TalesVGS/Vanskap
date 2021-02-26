import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-camiseta-masculina-list',
    templateUrl: './camiseta-masculina-list.component.html',
    styleUrls: ['./camiseta-masculina-list.component.css']
})
export class CamisetaMasculinaListComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit(): void {}
}