import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleadoos.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }
  
  indice:number;

  empleados:Empleado[]=[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  accion:number;

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  // actualizarEmpleado() {
  //   let miEmpleado = new Empleado(this.cuadroNombre,
  //                                 this.cuadroApellido,
  //                                 this.cuadroCargo,
  //                                 this.cuadroSalario);
  //   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  //   this.empleadosService.actualizarEmpleadoService(this.indice, miEmpleado);
  //   this.router.navigate(['']);
  // }

  // eliminarEmpleado() {
  //   this.empleadosService.eliminarEmpleadoService(this.indice);
  //   this.router.navigate(['']);
  // }


  actualizarEmpleado() {
    if(this.accion==1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizarEmpleadoService(this.indice, miEmpleado);
      this.router.navigate(['']);
    } else {
      this.empleadosService.eliminarEmpleadoService(this.indice);
      this.router.navigate(['']);
    }

    }
}
