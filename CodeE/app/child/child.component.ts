import {Component} from '@angular/core';
import {Input,EventEmitter,Output} from '@angular/core';
import {MyService} from '../service/MyService';

@Component({
  selector:'child-comp',
  templateUrl:'child.component.html'
  //,provider:[MyService]
})
export class ChildComponent{
  x:number;
  y:number;
  title:string;
  constructor(private service:MyService){
    this.x = 100;
    this.y = 200;
    this.title = 'I am a Child Comp';
  }
  @Input("msg")
  message:string;
  @Output("passtochild")
  e:EventEmitter<number> = new EventEmitter<number>();

  triggerParent(){

    this.e.emit(1000);
  }

  callService(){
    this.service.takeData('Hello Parent i am call from child...');
  }


}
