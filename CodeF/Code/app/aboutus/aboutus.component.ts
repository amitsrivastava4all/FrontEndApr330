import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  details:string;
  constructor(private actRoute:ActivatedRoute) {
    this.details = '';
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params=>{
      this.details = "Your Name is "+params.name + " Your Job is "+params.job;
    });
  }

}
