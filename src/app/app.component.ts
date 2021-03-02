import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router : Router){}
  inputJudul=""
  isiText=""
  tanggal=""

  halaman2(){
    this.router.navigate(["/home/"+this.textNama]);
  }
}
