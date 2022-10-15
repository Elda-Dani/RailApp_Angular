import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
import { AdddataComponent } from './adddata/adddata.component';


const appRoutes:Routes=[
  {
    path:"",component:ViewalltrainsComponent
  },
  {
    path:"add",component:AdddataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewalltrainsComponent,
    AdddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
