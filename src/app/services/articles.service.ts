import { Injectable } from '@angular/core';
import {ArticleInterface} from "../models/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  private _article: ArticleInterface = {id: -1,title:'',text:''};

  private _articles: ArticleInterface[] =
    [{id: 0, title: "Subaru", text:"Subaru is the best auto in the world"},
    {id: 1, title: "BMW", text:"BMW is the worse auto in the world"},
    {id: 2, title: "Bentley", text:"Bentley is the most expensive auto in the world"}
  ]

get articles() {
    return this._articles
  }
set articles(newArticles:ArticleInterface[]) {
  this._articles = newArticles;
  }
get article() {
  return this._article;
  }
 setArticle(id:number) {
    const tempEl:ArticleInterface|undefined= this._articles.find(article => article.id === id);
    if (tempEl) {
      this._article = tempEl;
    }
  }


}
