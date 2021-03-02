import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalVarService } from "../app/global-var.service";

@Component({
  selector: "app-hal2",
  templateUrl: "./hal2.component.html",
  styleUrls: ["./hal2.component.css"]
})
export class Hal2Component implements OnInit {
  ambilJudul: String;
  ambilIsi: String;
  ambilTanggal: String;
  countFav;
  semuaJudul;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalvar: GlobalVarService
  ) {
    this.semuaJudul = this.globalvar.getFav();
    this.ambilJudul = this.globalvar.getDicari();
    this.ambilIsi = this.globalvar.getIsi(this.ambilJudul);
    this.ambilTanggal = this.globalvar.getTanggal(this.ambilJudul);
  }

  ngOnInit() {}

  Favorite() {
    if(this.ambilIsi!=""){
    this.countFav = this.globalvar.getCountFav();
    var i: number = 0;
    var cek: number = 0;
    for (i = 0; i < this.countFav; i++) {
      if (this.semuaJudul[i].match(this.ambilJudul)) {
        alert("Sudah ada di favorite");
        cek = 1;
      }
    }
    if (cek != 1) {
      this.globalvar.setFavorite(this.ambilJudul);
      alert("Selesai difavorite");
      this.globalvar.incCountFav();
    }
    }
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
