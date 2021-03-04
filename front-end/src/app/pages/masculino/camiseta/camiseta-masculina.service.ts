import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Camiseta from "../../camiseta";

@Injectable({
    providedIn: 'root',
})
export class CamisetaMasculinaService {

    protected url = `http://localhost:8080/camisetas/masculino`

    constructor(private http: HttpClient) {}

    findAll(): Observable<Camiseta[]> {
        return this.http.get<Camiseta[]>(this.url);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    save(data: Camiseta): Observable<Camiseta> {
        if(data.id) {
            return this.http.put<Camiseta>(this.url, data);
        } else {
            return this.http.post<Camiseta>(this.url, data);
        }
    }

    findById(id: number): Observable<Camiseta> {
        return this.http.get<Camiseta>(`${this.url}/${id}`);
    }

}