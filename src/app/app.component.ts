import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProductosServicesProvider } from '../providers/productos-service/productos-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //variables globales
  producto: FormGroup;
  productos;
  editar=false;
  crear=false;
  product;

  constructor(private productosServicesProvider: ProductosServicesProvider, private fb: FormBuilder) 
    {
        this.producto = fb.group({
            nombre: '',
            descripcion: '',
            precio: ''
        });
        this.traerProductos();
    }

    //Llamado al provider para crear nuevo producto
    crearProducto(){
      try {
        this.productosServicesProvider.crearProducto(this.producto.value);
        console.log(this.producto.value)
        this.crear=false;
      } catch (error) {
        
      }
      window.location.reload();
    }
    
    //Llamado al provider para listar los productos actuales
    traerProductos(){
      try {
        this.productosServicesProvider.listarProductos().subscribe(
          (data) => {
            console.log(data);
            this.productos = data;
          }
        );
      } catch (error) {
        
      }
    }

    //Llamado al provider para eliminar el producto seleccionado
    borrarProducto(producto){
      try {
        this.productosServicesProvider.borrarProducto(producto).subscribe(
          (data) => {console.log(data);}
        );
      } catch (error) {
        
      }
      window.location.reload();
    }

    ////Llamado al provider para editar el producto seleccionado
    editarProducto(){
      try {
        console.log(this.product);
        console.log(this.producto.value)
        this.productosServicesProvider.editarProducto(this.product, this.producto.value);
        this.editar=true;
      } catch (error) {
        
      }
      window.location.reload();
    }

    //las vistas controlan que los formularios de los botones aparezcan
    vistaEditar(producto){
      this.editar=true;
      this.product=producto;
    }

    vistaCrear(){
      this.crear=true;
    }

}
