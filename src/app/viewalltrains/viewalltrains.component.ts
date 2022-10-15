import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewTrains().subscribe(
      (data)=>{
        this.trainsData=data
      }
    )
  }


trainsData:any={}
  
  ngOnInit(): void {
  }

}
