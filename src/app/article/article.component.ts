import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  constructor(private route: ActivatedRoute,private data: ArticleService) { }
  
  id:string;
  responseData:any[];
  articleTxt:any;


  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("Path Param::: " + this.id);

    this.getArticle();
  }

  getArticle(){

    this.data.getArticleById(this.id).subscribe(data => {

      this.responseData = data;

      this.articleTxt = this.responseData['articletxt'];
      console.log();

    });

  }

}
