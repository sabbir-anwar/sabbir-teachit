import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-list/video-detail/video-detail.component';
import { LoginComponent } from './login/login.component';
import { EmbedVideo } from 'ngx-embed-video';

const appRoutes:Routes=[
  { path: '', component: AppLayoutComponent,
  children: [
    { path: '', component: VideoListComponent },
    { path: 'watch_video', component: VideoDetailComponent}
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SiteHeaderComponent,
    VideoListComponent,
    VideoDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
