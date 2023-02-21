import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';
  empleados:Empleado[]=[
    new Empleado("Jorge","Ruiz","CEO",20000),
    new Empleado("Ramon","Juarez","HR",10000),
    new Empleado("Carlos","Ramirez","DEVELOPER",12000),
    new Empleado("Marcos","Alonso","DRIVER",8000)
  ]
  cuadroNombre=""
  cuadroApellido=""
  cuadroCargo=""
  cuadroSalario=0

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    this.empleados.push(miEmpleado)
  }
}
