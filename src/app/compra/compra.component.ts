import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { CarritoServices } from '../services/carrito.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(
    private carritoServices: CarritoServices,
  ) { }

  ngOnInit(): void {
    this.carritoServices.verCarrito().subscribe(pipe(response => {
      
    },
    error => {

    }))
  }

}
