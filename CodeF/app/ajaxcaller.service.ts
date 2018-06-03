import { Injectable,OnInit, OnDestroy } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Image} from './model/Image';
@Injectable()
export class AjaxcallerService implements OnInit,OnDestroy {

  constructor(private http:Http) {
    this.url = '';
console.log(" I will call when Service is Created....");

   }

  ngOnInit(){
  console.log('I Will Call After Constructor....');
  // Make AJax Call
  }
  makeAjax(search):Promise<Image[]>{
    this.url ="http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=5";
    return this.http.get(this.url).toPromise().then(response=>{
      return response.json().data as Image[];
    }).catch(err=>  Promise.reject(err.message || err));
    console.log("Do Ajax call..");
  }
  ngOnDestroy(){
    console.log("Destroy Call");
  }



}
