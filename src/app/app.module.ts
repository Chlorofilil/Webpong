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



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TreningComponent,
    TheNavigationComponent,
    

    
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
    FormsModule,  
    ReactiveFormsModule, BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
