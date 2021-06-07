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
  
  // mArticles: Article[] | undefined;
  // mSources: Source[] | undefined;

  constructor(private newsApi: NewsApiService){}

  ngOnInit(){
    //load articles
    this.newsApi.initHeadlines().subscribe(data => this.mArticles = data['articles']);
		//load news sources
		this.newsApi.initSources().subscribe(data=> this.mSources = data['sources']);	
  }

  getArticlesBySource(source: string){
    this.newsApi.getArticlesBySource(source).subscribe((data)=>{
      this.mArticles = data['articles']
    });
  }
}
