import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {
  constructor(private servicioVentanaEmergente:ServicioEmpleadosService){}
  
  empleados:Empleado[]=[
    new Empleado("Camila", "Sanchez", "Presidente", 11000),
    new Empleado("Wilberth", "Colli", "Director", 10000),
    new Empleado("Edward", "Lopez", "Administrador", 9000),
    new Empleado("Melanie", "Puc", "Gerente", 10000)
  ];

  agregarEmpleadoService(empleado:Empleado) {
    this.servicioVentanaEmergente.muestraMensaje("Persona agregada: " + empleado.nombre + "\n" +
    "Salario: " + empleado.salario);
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice:number) {
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleadoService(indice:number, empleado:Empleado) {
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }

  eliminarEmpleadoService(indice:number) {
    this.empleados.splice(indice,1);
  }
}
