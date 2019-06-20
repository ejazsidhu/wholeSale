import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedHttpService } from '../shared/shared-http.service';
import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="merchandiser List"
  minDate = new Date(2000, 0, 1);
  maxDate:any = new Date();
  startDate:any=new Date();
  endDate=new Date();
  loadingReportMessage=false;
    merchandiserList: any=[];
  userId: any;
   

  constructor(public router:Router, public activatedRoute: ActivatedRoute,private httpService:SharedHttpService){
    this.activatedRoute.queryParams.subscribe(p=>{
      console.log(p)
      this.userId=p.userId;
      this.getMerchandiserList();

    })
    
  
  
      this.maxDate.setDate(this.maxDate.getDate()-1);
      this.startDate.setDate(this.startDate.getDate()-1)
    
    // this.startDate=moment(this.startDate).subtract('day',1).format('YYYY/MM/DD')
    
      }

  
    ngOnInit() {
    }
  
    getMerchandiserList(){
      let obj={
        evaluatorId:this.userId,
      };
  
      this.httpService.getMerchandiserListForEvaluation(obj).subscribe((data:any)=>{
        // console.log('merchandiser list for evaluation',data);
        this.merchandiserList=data;
      })
  
    }
  
    modifyDate(date){
      return moment(date).format('YYYY-MM-DD');
    }
  

}
