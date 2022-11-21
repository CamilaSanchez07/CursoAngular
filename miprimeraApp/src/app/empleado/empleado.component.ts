import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Camila";
  apellido = "Sánchez";
  edad = 17;
  
  empresa = "CBTis 72";
  cambiaEmpresa(event:Event) {
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  // getEdad(){
  //   return this.edad;
  // }

  habilitacionCuadro = false;
  userRegistrado = true;
  textoRegistro = "No hay ningún registro";

  getRegistroUsuario() {
    this.userRegistrado = false;
  }

  setUsuarioRegistrado(event:Event) {
    if((<HTMLInputElement>event.target).value=="si") {
      this.textoRegistro = "Usuario registrado!"; 
    } else {
      this.textoRegistro = "No hay ningún registro";
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
