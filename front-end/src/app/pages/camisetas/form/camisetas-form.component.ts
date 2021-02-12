import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-camisetas-form',
    templateUrl: './camisetas-form.component.html',
    styleUrls: ['./camisetas-form.component.css']
})
export class CamisetasFormComponent implements OnInit {
    constructor (
        private router: Router, 
    ) {}
    
    ngOnInit(): void {
    }
    
    Cancel(): void {
        this.router.navigate(['camisetas']);
    }
}