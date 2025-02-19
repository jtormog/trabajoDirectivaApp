import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empleado } from './empleado';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[] = [];

  constructor(){
    this.empleados = [
      {
        nombre: 'Juan',
        apellido: 'Diaz',
        cargo: 'presidente',
        salario: 7500
      },
      {
        nombre: 'Ana',
        apellido: 'Martín',
        cargo: 'directora',
        salario: 7500
      },
      {
        nombre: 'Juan',
        apellido: 'Diaz',
        cargo: 'jefa de sección',
        salario: 7500
      },
      {
        nombre: 'Juan',
        apellido: 'Diaz',
        cargo: 'administrativo',
        salario: 7500
      },
    ];
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string = '';
  cuadroApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;
}
