import { Component, OnInit } from '@angular/core';
import { ArticleserviceService } from 'src/app/shared/articleservice.service';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  response:any[] = [];
  constructor(private articleservice:ArticleserviceService) { }
  ngOnInit(): void {
    this.getTousArticles();
  }
  getTousArticles(){
    this.articleservice.getArticles().subscribe((res: any)=>{
    console.log(res);
    this.response = res.data;
    console.log(this.response);
    },(err: any)=>{
    console.log(err);
    })
  }
}
