import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import Camiseta from "../pages/camiseta";

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    constructor(private http: HttpClient) { }

    findAllByOfertas(): Observable<Camiseta[]> {
        return this.http.get<Camiseta[]>(`${environment.apiUrl}/camisetas/masculino/ofertas`);
    }


}