import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from '../app/global-var.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.component.html',
  styleUrls: ['./hal3.component.css']
})
export class Hal3Component implements OnInit {
  ambilFavorite = [];
  constructor(private globalvar: GlobalVarService) { 
    this.ambilFavorite = this.globalvar.getFav();
  }

  ngOnInit() {
  }

}