import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule,    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
