import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import Camiseta from "../../shared/Data/camiseta";

@Injectable({
    providedIn: 'root',
})
export class HomeService {

    constructor(private http: HttpClient) { }

    findAllByOfertas(): Observable<Camiseta[]> {
        return this.http.get<Camiseta[]>(`${environment.api.url}/masculino/camisetas/ofertas`);
    }

}