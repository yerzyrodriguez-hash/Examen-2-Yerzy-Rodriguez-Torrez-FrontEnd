import { Component } from '@angular/core';
import { Empleadoservice } from '../core/services/empleadoservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- 1. IMPORTAR FORMSMODULE
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss'
})
export class Home {
  //declaramos una variables para recibir la data del backend
  empleados:any[]=[];
  /**
   *
   */
  // Objeto para enlazar (bind) al formulario -------------------------
    nuevoEmpleado: any = {
    nombre: '',
    apellido: '',
    correo: '',
    salario: 0.0
  };
  // creamo un constructor para llamar a nuestro servicio
  constructor(private empleadoService:Empleadoservice) {
        this.listarProductos();
  }
  //creamos un metodo para listar Empleados desde el servicio
  listarProductos():void
  {
    this.empleadoService.listaEmpleados().subscribe({
      next:(data)=> {
        this.empleados = data
        console.log(this.empleados);
      },
      error:(err)=>console.error('error al cargar Empleados',err)
    })
  }

  // Método para manejar el envío del formulario -----------------------
  guardarProducto(): void {
    // Llama al servicio con los datos del formulario
    this.empleadoService.crearEmpleado(this.nuevoEmpleado).subscribe({
      next: (data) => {
        console.log('Empleado registrado exitosamente!', data);
        // Recarga la lista de Empleados para mostrar el nuevo
        this.listarProductos(); 
        // Limpia el formulario
        this.nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0.0 };
      },
      error: (err) => console.error('Error al Registrar Empleado', err)
    });
  }

}
