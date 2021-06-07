import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey = "c2b51f6affec4c2aa89879dde7b7dee8";
  private baseURL = "https://newsapi.org/v2";

  private allArticlesEndpoint = "/everything"
  private sourcesEndPoint = "/sources"
  private headlinesEndPoint = "/top-headlines";

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get(this.baseURL + this.sourcesEndPoint + '?language=en&apiKey=' + this.apiKey);
  }

  initHeadlines() {
    return this.http.get(this.baseURL + this.headlinesEndPoint + '?sources=techcrunch&apiKey=' + this.apiKey);
  }

  getArticlesBySource(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
  }
}
