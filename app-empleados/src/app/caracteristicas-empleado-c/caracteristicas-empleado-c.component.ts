import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() crtEmpleado = new EventEmitter<string>();
  
  addCaracteristicas(value:string) {
    this.crtEmpleado.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
