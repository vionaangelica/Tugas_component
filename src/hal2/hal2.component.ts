import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarService } from '../app/global-var.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  ambilJudul = [];
  constructor(private route : ActivatedRoute, private globalvar : GlobalVarService) { 
      this.ambilJudul = this.globalvar.getJudul();
  }

  ngOnInit() {
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