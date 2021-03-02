import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from './global-var.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router : Router,  private globalvar : GlobalVarService){}
  
  Halaman1(){
    this.router.navigate(["/hal1"]);
  }
  Halaman3(){
    this.router.navigate(["/hal3"]);
  }
}
