import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { SidNavigationComponent } from './sid-navigation/sid-navigation.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from "@angular/material/grid-list";
import {RouterOutlet} from "@angular/router";
import { ChartComponent } from './sid-navigation/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidNavigationComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
