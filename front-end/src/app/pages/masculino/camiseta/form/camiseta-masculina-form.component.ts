import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CamisetaMasculinaService } from "../camiseta-masculina.service";

@Component({
    selector: 'app-camiseta-masculina-form',
    templateUrl: './camiseta-masculina-form.component.html',
    styleUrls: ['./camiseta-masculina-form.component.css']
})
export class CamisetaMasculinaFormComponent implements OnInit {
    constructor(
        public router: Router,
        private builder: FormBuilder,
        private camisetaMasculinaService: CamisetaMasculinaService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        
    }

}