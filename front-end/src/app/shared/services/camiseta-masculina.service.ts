import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractRestService } from "src/app/core/service/abstract-rest.service";

import { environment } from "src/environments/environment";
import Camiseta from "../Data/camiseta";

@Injectable({
    providedIn: "root",
})
export class CamisetaMasculinaService extends AbstractRestService<Camiseta> {
    protected url = `${environment.api.url}/masculino/camisetas`;
    constructor(protected http: HttpClient) {
        super(http);
    }
}