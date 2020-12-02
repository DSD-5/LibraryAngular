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
            'Content-Type': 'application/json',
            'Authorization': token,
        });
        console.log(token);
        let params = new URLSearchParams();
        params.set('direction','ABC');
        params.set('preview','true');
        params.set('reference','ABC');
        params.set('shoppingId','19');
        params.set('suscriptionId','1');
        params.set('deliveryId','1');
        return this.http.post(environment.CARRITO.replace("{direction}","ABC").replace("{preview}","true")
        .replace("{reference}","ABC").replace("{shoppingId}","19").replace("{suscriptionId}","1")
        .replace("{deliveryId}","1"), {},{headers: header}).pipe(map(response => {
            console.log('Bearer ');
            console.log(response);
            return response;
        }));
    }

}
