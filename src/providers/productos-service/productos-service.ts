import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProviderSettingsProvider } from '../providers-settings/provider-settings';

@Injectable()
export class ProductosServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public crearProducto(producto) {
    const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    try {
        console.log(producto);
        return this.http.post(this.apiUrl+'crearNuevo', JSON.stringify(producto), {
            headers: headers  
        }).subscribe(
            data => {console.log(data);}
        );
    } catch (error) {
        console.log("hasta aqui llego");
    }
  }

  public listarProductos(){
    return this.http.get(this.apiUrl+'Listar');
  }

  public borrarProducto(producto){
      return this.http.delete(this.apiUrl+producto);
  }

  public editarProducto(producto, mood){
    const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    try {
        return this.http.patch(this.apiUrl+producto, JSON.stringify(mood),{
        headers: headers
      }).subscribe(
        data => {console.log(data);}
      );
    } catch (error) {
      console.log("hasta aqui llego");
    }
  }
}