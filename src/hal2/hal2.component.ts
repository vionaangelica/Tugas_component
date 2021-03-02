import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVarService } from '../app/global-var.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  ambilJudul = [];
  ambilIsi = [];
  ambilTanggal = [];
  constructor(private route : ActivatedRoute, private router : Router, private globalvar : GlobalVarService) { 
      this.ambilJudul = this.globalvar.getDicari();
      this.ambilIsi = this.globalvar.getIsi(this.ambilJudul);
      this.ambilTanggal = this.globalvar.getTanggal();

  }

  ngOnInit() {
  }

  Next(){
    this.router.navigate(["/hal3"]);
  }

  // Tampil(){
  //     var i : number = 0;
  //     for(i=0;i<=this.globalvar.getCount();i++){
  //         {{this.globalvar.getJudul(i)}};
  //         {{this.globalvar.getIsi(i)}};
  //         {{this.globalvar.getTanggal(i)}};
  //     }
  // }

}