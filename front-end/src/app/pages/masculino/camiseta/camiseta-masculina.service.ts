import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import Camiseta from "../../camiseta";
import { switchMap } from 'rxjs/operators'

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

    save(data: Camiseta, selectedImage?: File): Observable<Camiseta> {

        let observable = of({});
        
        
        if(selectedImage) {
            observable = observable.pipe(
                switchMap(() => {
                    if (!data.imageUrl) {
                        data.imageUrl = this.randomStr();
                    }
                    
                    const formData: FormData = new FormData();
                    formData.append('pid', data.imageUrl);
                    formData.append('file', selectedImage);
                    
                    return this.http.post(`http://localhost:8080/images`, formData, {
                        responseType: 'text'
                    })
                })
                
                );
            }
            if(data.id) {
                return this.http.put<Camiseta>(this.url, data);
            } else {
                return this.http.post<Camiseta>(this.url, data);
            }
    }

    findById(id: number): Observable<Camiseta> {
        return this.http.get<Camiseta>(`${this.url}/${id}`);
    }

    private randomStr() {
        let result = ''
        let characters = 'ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 14; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }
    
}