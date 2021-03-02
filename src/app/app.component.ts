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
  inputJudul=""
  isiText=""
  tanggal=""

  halaman2(){
    this.globalvar.setJudul(this.inputJudul);
    this.globalvar.setIsi(this.isiText);
    this.globalvar.setTanggal(this.tanggal);
    this.globalvar.incCount();

    this.router.navigate(["/hal2"]);
  }
}
