import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  // template: "<p>Aquí iría un empleado</p>",
  // styles: ["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Camila";
  apellido = "Sánchez";
  edad = 17;
  // empresa = "CBTis 72";

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
