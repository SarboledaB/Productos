import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import de los providers
import { ProviderSettingsProvider } from '../providers/providers-settings/provider-settings';
import { ProductosServicesProvider } from '../providers/productos-service/productos-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductosServicesProvider,
    ProviderSettingsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
