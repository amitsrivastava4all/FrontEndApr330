import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import {MyService} from './service/MyService';

@NgModule({
  declarations: [
    AppComponent,ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
