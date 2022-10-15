import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor() { }


name="Lara"

readValues=()=>{
  let data={
    "name":this.name="Raju"
  }
}

  ngOnInit(): void {
  }

}
