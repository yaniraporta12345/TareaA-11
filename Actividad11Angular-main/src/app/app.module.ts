import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormuReactivoModule } from './formu-reactivo/formu-reactivo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormuReactivoModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
