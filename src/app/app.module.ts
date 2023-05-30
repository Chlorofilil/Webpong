import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';

//main  vyklikavacie okna
import { MainComponent } from './menu/main/main.component';
import { TreningComponent } from './menu/trening/trening.component';
import { appRoutingModule } from './app-routing.module';

//components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Component} from '@angular/core';

import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    TheNavigationComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
 }
