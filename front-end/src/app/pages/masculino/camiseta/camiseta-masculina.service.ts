import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import Camiseta from "../../camiseta";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CamisetaMasculinaService {

    protected url = `${environment.apiUrl}/camisetas/masculino`

    constructor(private http: HttpClient) { }

    findAll(): Observable<Camiseta[]> {
        return this.http.get<Camiseta[]>(this.url);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    async save(data: Camiseta, selectedImage: File) {

        if (selectedImage) {
            const formData: FormData = new FormData();
            formData.append('file', selectedImage);
            
            const res = await this.http.post(`${environment.apiUrl}/images`, formData, {
                responseType: 'text'
            }).toPromise()
            data.imageUrl = res
           
        }
        
        if (data.id) {
            return this.http.put<Camiseta>(this.url, data);
        } else {
            return this.http.post<Camiseta>(this.url, data);
        }
       
    }

    findById(id: number): Observable<Camiseta> {
        return this.http.get<Camiseta>(`${this.url}/${id}`);
    }

   
}