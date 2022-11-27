import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataService {
    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleado() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-ab4f6-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarEmpleado(empleados:Empleado[]) {
        this.httpClient.put('https://mis-clientes-ab4f6-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se ha guardado el registro: "+ response),
            error=>console.log("Error: "+ error),
        )
    }

    actualizarEmpleado(indice:number, empleado:Empleado) {
        let url = 'https://mis-clientes-ab4f6-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
        
        this.httpClient.put(url, empleado).subscribe(
            response=>console.log("Se ha actualizado el registro: "+ response),
            error=>console.log("Error: "+ error),
        )
    }

    eliminarEmpleado(indice:number) {
        let url = 'https://mis-clientes-ab4f6-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
        
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el registro: "+ response),
            error=>console.log("Error: "+ error),
        )
    }
}