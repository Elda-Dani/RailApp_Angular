import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {

  constructor() { }

  name="Elda"
  
  readValues=()=>{
    let data={
     "name":this.name="Raju" 
    }
  }


  
  ngOnInit(): void {
  }

}
