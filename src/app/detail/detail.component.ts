import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iNews } from '../models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  public id: number;
  public inews: iNews;

  constructor(private newsService: NewsService,
              private activatedRoute: ActivatedRoute){
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inews = this.newsService.getProductById(this.id);
  }

}
