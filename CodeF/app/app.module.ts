import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Appmodule2Module } from './appmodule2/appmodule2.module';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent

  ],
  imports: [


  BrowserModule,Appmodule2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
