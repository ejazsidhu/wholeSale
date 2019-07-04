import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {
  // ip=environment.ip;
  ip="http://192.168.3.94:8080/audit/";

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    withCredentials: true
  };

  UrlEncodeMaker(obj) {
    let url = '';
      for (const key in obj) {
      url += `${key}=${obj[key]}&`;
    }
    const newUrl = url.substring(0, url.length - 1);
    return newUrl;
  }
  getMerchandiserListForEvaluation(obj){

    let urlEncode=this.UrlEncodeMaker(obj)
    const url = this.ip + 'merchandiserList';
    return this.http.post(url, urlEncode,this.httpOptions);
  }
}
