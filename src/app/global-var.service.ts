import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {
  private dataJudul = [];
  private dataNotes = [];
  private dataTanggal = [];
  private judulDicari;
  private count = 0;

  constructor() { }
  public getJudul(){
    return this.dataJudul;
  }

  public getIndex(judul : String){
    var i : number = 0;
    for(i=0;i<this.count;i++){
      if (this.dataJudul[i] == judul){
        return i;
      }
    }
  }

  public getIsi(judul : String){
    var index = this.getIndex(judul);
    return this.dataNotes[index];
  }
  public getTanggal(judul : String){
    var index = this.getIndex(judul);
    return this.dataTanggal[index];
  }

  public getCount(){
    return this.count;
  }

  public getDicari(){
    return this.judulDicari;
  }

  public incCount(){
    this.count+=1;
  }

  public setJudul(judul : String){
    this.dataJudul.push(judul);
  }
  public setIsi(isi : String){
    this.dataNotes.push(isi);
  }
  public setTanggal(tgl : String){
    this.dataTanggal.push(tgl);
  }

  public setDicari(cari : String){
    this.judulDicari = cari;
  }

}