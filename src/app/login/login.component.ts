import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationServices} from '../services/authentication.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationServices,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(4)]],
      pass: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.isLoading = true;
    this.auth.login(this.f.user.value, this.f.pass.value).subscribe(result => {
      this.isLoading = false;
      localStorage.setItem('token', result.access_token);
      localStorage.setItem('idpersona', result.idpersona);
      this.auth.datosCliente(result.idpersona).subscribe(result => {
        localStorage.setItem('email',result.email);
        if (result.shoppingid == undefined){
          localStorage.setItem('carritolleno', 'no');
          window.location.href = 'http://tutiempolibro.cf/';
          // window.location.href = 'http://localhost:4200';
        }
        else{
          localStorage.setItem('carritolleno', 'si');
          localStorage.setItem('idcarrito', result.shoppingid);
          window.location.href = 'http://tutiempolibro.cf/';
          // window.location.href = 'http://localhost:4200';
        }
      })
    },
    error =>{
      this.isLoading = false;
      console.log(error);
        this._snackBar.open("Usuario incorrecto", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
    });

  }
}
