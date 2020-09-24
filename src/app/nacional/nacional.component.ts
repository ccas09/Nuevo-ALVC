import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iNews } from 'src/app/models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.less']
})
export class NacionalComponent implements OnInit {
  
  public inews: iNews[];

  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getAllNews();
  }

}
