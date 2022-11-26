import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[]=[
    new Empleado("Camila", "Sanchez", "Presidente", 11000),
    new Empleado("Wilberth", "Colli", "Director", 10000),
    new Empleado("Edward", "Lopez", "Administrador", 9000),
    new Empleado("Melanie", "Puc", "Gerente", 10000)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre,
                                  this.cuadroApellido,
                                  this.cuadroCargo,
                                  this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
