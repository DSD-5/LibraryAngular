import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { CarritoServices } from '../services/carrito.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(
    private carritoServices: CarritoServices,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.carritoServices.verCarrito().subscribe(pipe(response => {

    },
    error => {

    }))
  }

  pagar() {
  //   this.pagoServices.generarTokenVisa(user,pass).subscribe(
  //     result => {
  //       this.pagoServices.generarSesionVisa(result, importe, this.merchantid).subscribe(
  //         res => {
  //           let form = document.createElement("form");
  //           form.setAttribute('method', "POST");
  //           form.setAttribute('action',"http://10.217.1.104:8088/transaction.php"+"?purchase="+this.nropedido+"&amount="+importe+"&suministro="+this.nrosuministro+"&periodos="+this.nroperiodos+"&idempresa="+this.id_empresa);
  //           form.setAttribute('id', "boton_pago");
  //           document.getElementById("btnPago").appendChild(form);

  //           let scriptEl = document.createElement('script');
  //           scriptEl.setAttribute('id','script_pago');
  //           scriptEl.setAttribute('src', environment.URL_FORMULARIO_VISA);
  //           scriptEl.setAttribute('data-sessiontoken', res.sessionKey);
  //           scriptEl.setAttribute('data-merchantid', '602545705');
  //           scriptEl.setAttribute('data-purchasenumber', this.nropedido);
  //           scriptEl.setAttribute('data-merchantlogo', environment.URL_LOGO_VISA);
  //           scriptEl.setAttribute('data-channel', 'web');
  //           scriptEl.setAttribute('data-amount', totalpago );
  //           scriptEl.setAttribute('data-buttonsize', 'MEDIUM' );
  //           scriptEl.setAttribute('data-timeouturl', '5');
  //           document.getElementById("boton_pago").appendChild(scriptEl);

  //           this.isLoading = false;
  //           this.pagovisa = true;
  //           this.loadvisa = false;
  //           this.btnVisible = false;
  //           stepper.next();
  //         },
  //         error => {
  //           console.log(error);
  //           this.isLoading = false;
  //           this._snackBar.open("ERROR AL GENERAR FORMULARIO DE PAGO", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
  //           return;
  //         }
  //       );
  //     },
  //     error => {
  //       console.log(error);
  //       this.isLoading = false;
  //       this._snackBar.open("ERROR AL GENERAR FORMULARIO DE PAGO", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
  //       return;
  //     }
  //   );

  //   }
  }
}
