import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule,FormsModule],
  providers:[],
  bootstrap:[AppComponent]
})

export class AppModule{

}
