import { Component } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles:any
  constructor(private newsService:NewsService) { 
    this.loadNews()
  }
  ngOnInit() {}


  
loadNews()
{
this.newsService.getNews("top-headlines?country=us").subscribe(news=>{
  this.articles=news['articles'];
  console.log(this.articles);
})
}

}
