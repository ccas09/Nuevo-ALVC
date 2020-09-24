import { Injectable } from '@angular/core';
import { iNews } from 'src/app/models/news.models';
import { NEWS } from './NEWS.const';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private inews: iNews[];
  constructor() {
    this.inews = NEWS;
   }

   public getAllNews(){
     return this.inews;
   }

   public getProductById(id: number): iNews {
     return this.inews.find((news: iNews) => news._id == id);
   }
}
