import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationServices} from '../services/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  constructor(
    private AuthenticationServices: AuthenticationServices,
  ) { }

  ngOnInit(): void {
  }

  get f() { return this.registroForm.controls; }

  onSubmit() {
    // this.AuthenticationServices.registro()
  }

}
