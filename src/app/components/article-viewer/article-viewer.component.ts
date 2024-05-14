import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {ArticleInterface} from "../../models/article.interface";
import {NgClass, NgIf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-article-viewer',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf,
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './article-viewer.component.html',
  styleUrl: './article-viewer.component.css'
})
export class ArticleViewerComponent implements OnChanges, OnInit{


  @Input()articleViewer:ArticleInterface={};

  ngOnInit(): void {
    console.log("0ArticleViewer:",this.articleViewer)
  }


  ngOnChanges() {
    console.log("1ArticleViewer:",this.articleViewer.title?.length)
  }

}

