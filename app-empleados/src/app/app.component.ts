import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey:"AIzaSyDZlRl6Mib3M-n-czqKU2C87mEWRCRpEiA",
      authDomain: "mis-clientes.firebase.com"

    });
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }

}
