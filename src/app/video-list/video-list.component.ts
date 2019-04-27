import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {getHost} from '../config';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos = null;
  host=null;
  
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

  init()
  {
     this.http.get(getHost()).subscribe((res)=>{
       console.log("res");
       console.log(res); 
       this.videos=res;
     },(err)=>{
       console.log("error")
       console.log(err)
       if(err.status == 401)
       {
         this.router.navigate(["login"]);
       }
     })  
  } 

}
