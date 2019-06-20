import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'wholeSale';
  constructor(public router:Router, public activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(p=>{console.log(p)})

    // let str=this.router.url;
    // let lastIndex:any=str[str.length-1];
    // if(!isNaN(lastIndex))
    // console.log(lastIndex)

  }

  ngOnInit() {
  }

}
