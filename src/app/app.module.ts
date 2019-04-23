import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';

const appRoutes:Routes=[
  {
    path: '',
    component: AppLayoutComponent, 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
