import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import {getHost} from '../../config';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  vimeoUrl : any;
  videoUrl : any;
  detail = null;

  constructor(private http:HttpClient,private router:Router,private embedService: EmbedVideoService,private route:ActivatedRoute) {
    this.videoUrl = this.embedService.embed(this.vimeoUrl);
   }

  ngOnInit() {
    this.vimeoUrl=parseInt(this.route.snapshot.paramMap.get('id'));

    this.http.get(getHost()).subscribe((res)=>{ 
      this.detail=res;
    },(err)=>{
      if(err.status == 401)
      {
        this.router.navigate(["login"]);
      }
    }) 
  }

}
