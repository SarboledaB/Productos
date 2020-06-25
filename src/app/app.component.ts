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
  producto: FormGroup;
  productos;
  editar=false;
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

    crearProducto(){
      this.productosServicesProvider.crearProducto(this.producto.value);
      console.log(this.producto.value)
      window.location.reload();
    }
    
    traerProductos(){
      this.productosServicesProvider.listarProductos().subscribe(
        (data) => {
          console.log(data);
          this.productos = data;
        }
      );
    }

    borrarProducto(producto){
      this.productosServicesProvider.borrarProducto(producto).subscribe(
        (data) => {console.log(data);}
      );
      window.location.reload();
    }

    vistaEditar(producto){
      this.editar=true;
      this.product=producto;
    }

    editarProducto(){
      console.log(this.product);
      console.log(this.producto.value)
      this.productosServicesProvider.editarProducto(this.product, this.producto.value);
      this.editar=true;
      window.location.reload();
    }
}
