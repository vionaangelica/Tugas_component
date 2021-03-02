import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {
  private dataJudul = [];
  private dataNotes = [];
  private dataTanggal = [];
  private count = 0;

  constructor() { }
  public getJudul(){
    return this.dataJudul;
  }
  public getIsi(){
    return this.dataNotes;
  }
  public getTanggal(r){
    return this.dataTanggal;
  }

  public getCount(){
    return this.count;
  }

  public incCount(){
    this.count+=1;
  }

  public setJudul(judul : String){
    this.dataJudul.push(judul);
  }
  public setIsi(isi : String){
    this.dataJudul.push(isi);
  }
  public setTanggal(tgl : String){
    this.dataJudul.push(tgl);
  }

}