import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class AbstractRestService<T> {
    // Endereço da API
    protected url: string;
    protected imgSetted: boolean = false;
    protected pastImgUrl: string;

    constructor(protected http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };
    /**
     * VERIFICAR SE IMAGEM JÁ ESTÁ DISPONIVEL
     * @param imgSetted
     */
    imgSettedVerify(setted: boolean) {
        this.imgSetted = setted;
    }

    imgSettedValue() {
        return this.imgSetted;
    }

    imgPastUrl(pastUrl: string) {
        this.pastImgUrl = pastUrl;
    }

    /**
     * MÉTODO PARA BUSCAR TODOS
     */

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}`);
    }

    /**
     * MÉTODO PARA BUSCAR POR ID
     * @param id
     */

    findById(id: number): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`);
    }

    /**
     * MÉTODO PARA SALVAR
     * @param data
     */

    async save(data: any, ImgFile: FormData): Promise<Observable<T>> {
        if (data.id) {
            if (!this.imgSetted) {
                this.http
                    .delete(`http://localhost:8080/images/delete/${this.pastImgUrl}`)
                    .subscribe((res) => { });
                let urlImg = new Promise<any>((resolve, reject) => {
                    this.http
                        .post<any>(`http://localhost:8080/images`, ImgFile, {
                            observe: "body",
                            responseType: "text" as "json",
                        })
                        .subscribe((imgFile) => {
                            resolve(encodeURI(imgFile));
                        });
                });
                data.imageUrl = await urlImg;
            }
            return this.http.post<T>(`${this.url}`, data);
        } else {
            let urlImg = new Promise<any>((resolve, reject) => {
                this.http
                    .post<any>(`http://localhost:8080/images`, ImgFile, {
                        observe: "body",
                        responseType: "text" as "json",
                    })
                    .subscribe((imgFile) => {
                        resolve(encodeURI(imgFile));
                    });
            });
            data.imageUrl = await urlImg;
            return this.http.post<T>(`${this.url}`, data);
        }
    }

    /**
     * MÉTODO PARA DELETAR POR ID
     * @param id
     */

    deteleById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    deleteImg(nomeImg) {
        this.http
            .delete(`http://localhost:8080/images/delete/${nomeImg}`)
            .subscribe((res) => {
            
            });
    }
}
