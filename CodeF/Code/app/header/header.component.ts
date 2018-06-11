import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public aboutuslink:string;
  public customerName:string;
  public job:string;
  constructor() {
    this.customerName='Ram Kumar';
    this.job='Developer';
    this.aboutuslink = 'aboutus/'+this.customerName+'/'+this.job;
   }

  ngOnInit() {
  }

}
