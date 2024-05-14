import {Component, OnInit} from '@angular/core';
import {ArticleInterface} from "../../models/article.interface";
import {ArticleViewerComponent} from "../article-viewer/article-viewer.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    ArticleViewerComponent,
    NgForOf
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  public article : ArticleInterface = {id:0, title: "" ,text: ""}
  public articles: ArticleInterface[]=[];

  ngOnInit() {
    this.articles =
       [{id: 0, title: "Subaru", text:"Subaru is the best auto in the world"},
        {id: 1, title: "BMW", text:"BMW is the worse auto in the world"},
        {id: 2, title: "Bentley", text:"Bentley is the most expensive auto in the world"}
      ]

  }


  goToArticle(nom:any) {

    this.article = this.articles[nom];
    //console.log("nom:", nom);
    console.log(this.articles[nom])
  }

  protected readonly onclick = onclick;

  onClick($event: string) {
    console.log("eventEmmiter:",$event)
  }
}
