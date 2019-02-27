import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {}
  getstudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/55e37ca4-3a99-11e9-9959-d1756946abab');
  }
  getweatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=6507f66d6e1e7528f8dedb1226b4dc68');
  }
}
