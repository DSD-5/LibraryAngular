import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../constantes";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarritoServices {

    constructor(private http: HttpClient) {}

    verCarrito(): Observable<any>{
        let token = localStorage.getItem('token');
        let header = new HttpHeaders({
            'Authorization': 'Bearer '+token,
        });
        console.log(token);
        let params = new URLSearchParams();
        params.set('deliveryId','1');
        params.set('direction','Av%PERU%2024%20');
        params.set('preview','true');
        params.set('reference','OVALO%20JOSE%20GRANDA');
        params.set('shoppingId','1');
        params.set('suscriptionId','1');
        return this.http.post(environment.CARRITO, params.toString(),{}).pipe(map(response => {
            console.log(response);
            return response;
        }));
    }

}