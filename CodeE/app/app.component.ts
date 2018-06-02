import { Component ,ViewChild,ViewChildren,QueryList} from '@angular/core';
import {ChildComponent} from './child/child.component';
import {MyService} from './service/MyService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(ChildComponent)
  childList:QueryList<ChildComponent> ;
  @ViewChild(ChildComponent)
  child:ChildComponent;
  title = 'I am a Parent value';
  constructor(private service:MyService){

  }
  callMe(data:number):void{
    this.title  = 'Value coming from the Child is '+data;
  }

  getServiceData(){
  this.title = this.service.getData();
  }

}
