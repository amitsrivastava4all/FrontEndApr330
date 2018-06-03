import { Component, OnInit, DoCheck } from '@angular/core';
import {AjaxcallerService} from '../ajaxcaller.service';
import {Image} from '../model/Image';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,DoCheck {
  public images:Image[] ;

  public err:Object;
  constructor(private service:AjaxcallerService) {
    this.images = [];
    this.err= {};
    console.log("Child Component Constructor Called.....");
  //this.service  = new AjaxcallerService();

   }

  ngOnInit() {
    console.log('Child COmp ngonInit call..');

  }
  ngDoCheck(){
  console.log('I will call on any event fire....');
  }
  callOnButton(searchValue){
    this.service.makeAjax(searchValue).then(images=>{
      this.images = images;
      this.images.forEach(img=>{
        console.log("Image from server is ",img.images);
      })
      }).catch(err=>this.err=err);
  }


}
