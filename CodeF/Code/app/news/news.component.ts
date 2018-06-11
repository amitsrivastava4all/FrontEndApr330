import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title:string;
  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params=>{
      this.title = params.type + ' '+ params.subtype;
    })
  }

}
