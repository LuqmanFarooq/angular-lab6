import { Component,OnInit } from '@angular/core';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  students:any = [];
  galway:any =[];
  constructor(private dataservice:DataService){


  }
  ngOnInit(){
    this.dataservice.getstudentData().subscribe((data)=>{
      this.students = data.students;
    }
    );
    this.dataservice.getweatherData().subscribe((data)=>{
      this.galway = data.weather;
    });

    
  }
}
