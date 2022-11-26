import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas:Array<{titulo:string}>;

  constructor() {
    this.entradas=[
      {titulo:"Phython cada día más presente"},
      {titulo:"Java presente hace más de 20 años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"},
    ]
  }

  registrar() {
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito!";
  }
}
