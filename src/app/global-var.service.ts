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
  public getTanggal(){
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
    this.dataNotes.push(isi);
  }
  public setTanggal(tgl : String){
    this.dataTanggal.push(tgl);
  }

}