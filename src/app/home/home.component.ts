import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedHttpService } from '../shared/shared-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'wholeSale';
  constructor(public router:Router, public activatedRoute: ActivatedRoute,private httpService:SharedHttpService){
    this.activatedRoute.queryParams.subscribe(p=>{console.log(p)})

    // let str=this.router.url;
    // let lastIndex:any=str[str.length-1];
    // if(!isNaN(lastIndex))
    // console.log(lastIndex)

  }

  ngOnInit() {
  }

}
