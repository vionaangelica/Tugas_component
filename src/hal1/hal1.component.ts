import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../app/global-var.service';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {
  ambilJudul = [];

  constructor(private router : Router,  private globalvar : GlobalVarService) { 
      this.ambilJudul = this.globalvar.getJudul();
  }

  ngOnInit() {
  }
  inputJudul=""
  isiText=""
  tanggal=""
  cariJudul=""

  submit(){
    this.globalvar.setJudul(this.inputJudul);
    this.globalvar.setIsi(this.isiText);
    this.globalvar.setTanggal(this.tanggal);
    this.globalvar.incCount();
  }
  Halaman2(){
    this.globalvar.setDicari(this.cariJudul);
    this.router.navigate(["/hal2"+this.cariJudul]);
  }
}