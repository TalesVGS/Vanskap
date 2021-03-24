import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    constructor(private http: HttpClient) { }

    findAllByOfertas() {
        this.http.get(`${environment.apiUrl}/camisetas/masculino`)
    }


}