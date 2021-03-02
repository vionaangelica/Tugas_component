import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hal2Component } from '../hal2/hal2.component';
import { RouterModule, Routes } from '@angular/router';
import { GlobalVarService } from './global-var.service';

const ROUTES : Routes = [
  {path : 'hal2', component : Hal2Component}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, Hal2Component],
  bootstrap:    [ AppComponent ],
  providers: [GlobalVarService]
})
export class AppModule { }
