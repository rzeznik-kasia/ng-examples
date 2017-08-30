import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SumPipe} from "./pipes/sum.pipe";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {WorkersService} from "./services/workers.service";

@NgModule({
  declarations: [
    AppComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WorkersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
