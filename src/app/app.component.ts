import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wholeSale';
  constructor(public router:Router, public activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(p=>{console.log})

    // let str=this.router.url;
    // let lastIndex:any=str[str.length-1];
    // if(!isNaN(lastIndex))
    // console.log(lastIndex)

  }
}
