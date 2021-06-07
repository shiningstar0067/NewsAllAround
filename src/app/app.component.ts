import { Component } from '@angular/core';
import { NewsApiService } from '../Services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsAllAround';

  mArticles: Array<any> = [];
	mSources: Array<any> = [];

  constructor(private newsApi: NewsApiService){}

  ngOnInit(){
    //load articles
    this.newsApi.initHeadlines().subscribe((data: any) => this.mArticles = data['articles']);
		//load news sources
		this.newsApi.initSources().subscribe((data: any)=> this.mSources = data['sources']);	
  }

  getArticlesBySource(source: string){
    this.newsApi.getArticlesBySource(source).subscribe((data: any)=>{
      this.mArticles = data['articles']
    });
  }
}
