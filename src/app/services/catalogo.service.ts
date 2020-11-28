import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";
import {environment} from "../../constantes";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class CatalogoServices {
    constructor(private http: HttpClient) {}

    listarLibros(categoria: number): Observable<any>{
        return this.http.get<any>(environment.CATALOGO, {
        }).pipe(map(response => {
            return response;
        }))
    }

    detalleLibro(id: number): Observable<any>{
        return this.http.get<any>(environment.CATALOGO, {
        }).pipe(map(response => {
            return response;
        }))
    }

}