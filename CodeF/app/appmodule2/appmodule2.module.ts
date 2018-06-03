import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from '../child2/child2.component';
import {AjaxcallerService} from '../ajaxcaller.service';
import {ModuleWithProviders} from '@angular/core';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [

  CommonModule,HttpModule
  ],
  declarations: [Child2Component],
  providers:[AjaxcallerService],
  exports:[Child2Component]
})
export class Appmodule2Module {


}
