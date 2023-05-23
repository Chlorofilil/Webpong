import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//main  vyklikavacie okna
import { MainComponent } from './menu/main/main.component';
import { TreningComponent } from './menu/trening/trening.component';
import { appRoutingModule } from './app-routing.module';

//components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TreningComponent,
    TheNavigationComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
