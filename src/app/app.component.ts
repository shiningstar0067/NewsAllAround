import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsAllAround';

  mArticles: any;
  mSources: Array<any> =[];

  constructor(private newsApi: NewsApiService){}

  ngOnInit(){
    this.newsApi.initArticles().subscribe(data => console.log(data));

    //this.newsApi.initSources().subscribe(data => this.mSources = data['sources'])
  }
}
