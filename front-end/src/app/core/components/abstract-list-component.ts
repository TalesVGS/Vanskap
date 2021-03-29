import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export abstract class AbstractListComponent<T> implements OnInit {
    protected resultados: any;

    constructor(protected service: any, protected route: ActivatedRoute) { }

    ngOnInit() {
        this.onListar();
    }

    onListar() {
        this.service
            .findAll()
            .subscribe((resultados) => (this.resultados = resultados));
    }
}