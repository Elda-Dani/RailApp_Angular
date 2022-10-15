import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {

  constructor() { }

  name="Elda"
  
status:boolean=false

  readValues=()=>{
    let data={
     "name":this.name="Raju" 
    }
    this.status=true
  }


  
  ngOnInit(): void {
  }

}
