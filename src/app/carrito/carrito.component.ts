import { Component, OnInit } from '@angular/core';
import { CarritoServices } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito: any;
  libro: any;
  total: number = 0;
  constructor(
    private carritoService: CarritoServices,
  ) { }

  ngOnInit(): void {
    this.carritoService.verCarrito().subscribe(result => {
      this.libro = result.PurchaseDetailType;
      this.carrito = result;
      this.libro.forEach((item) =>
        this.total = Number(item.subtotal) + this.total
      );
      console.log(this.carrito);
      console.log(this.libro);
    });
  }


}
