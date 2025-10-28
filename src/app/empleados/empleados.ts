import { Component } from '@angular/core';
import { EmpleadosService } from '../core/services/empleadoservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- 1. IMPORTAR FORMSMODULE
@Component({
  selector: 'app-empleados',
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class EmpleadosComponent {
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
  constructor(private empleadoService:EmpleadosService) {
        this.listarEmpleados();
  }
  //creamos un metodo para listar productos desde el servicio
  listarEmpleados():void
  {
    this.empleadoService.listaEmpleados().subscribe({
      next:(data)=> {
        this.empleados = data
        console.log(this.empleados);
      },
      error:(err)=>console.error('error al cargar productos',err)
    })
  }

  // Método para manejar el envío del formulario -----------------------
  guardarEmpleado(): void {
    // Llama al servicio con los datos del formulario
    this.empleadoService.crearEmpleado(this.nuevoEmpleado).subscribe({
      next: (data) => {
        console.log('Producto creado exitosamente!', data);
        // Recarga la lista de productos para mostrar el nuevo
        this.listarEmpleados(); 
        // Limpia el formulario
        this.nuevoEmpleado = { nombre: '', precio: 0.0, categoria_id: 1 };
      },
      error: (err) => console.error('Error al crear producto', err)
    });
  }

}