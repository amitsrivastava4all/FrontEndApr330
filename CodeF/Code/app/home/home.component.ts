import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 static flag:boolean=false;
  constructor(private router:Router) {
    //flag = false;
    console.log('Home Cons Call');
   }

  ngOnInit() {
    console.log('NgOnInit Call Home');
  }
  corpOpen(){
    this.router.navigate(['contactus/corporateoffice']);
  }

  callMe(){
    console.log("Flag is ",HomeComponent.flag);
    if(HomeComponent.flag){

      this.router.navigate(['news']);
    }
    else {

      this.router.navigate(['error']);
    }
    HomeComponent.flag = !HomeComponent.flag;

  }

}
