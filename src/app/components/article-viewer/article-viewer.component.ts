import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {ArticleInterface} from "../../models/article.interface";
import {NgClass, NgIf, UpperCasePipe} from "@angular/common";
import {ReversPipe} from "../../shared/revers/revers.pipe";
import {BoldDirective} from "../../shared/bold/bold.directive";

@Component({
  selector: 'app-article-viewer',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf,
    UpperCasePipe,
    NgClass,
    ReversPipe,
    BoldDirective
  ],
  templateUrl: './article-viewer.component.html',
  styleUrl: './article-viewer.component.css'
})
export class ArticleViewerComponent implements OnChanges, OnInit{


  @Input()articleViewer:ArticleInterface={id:0, title: "" ,text: ""};
  @Output()articleChange:EventEmitter<string>

  constructor() {
    this.articleChange = new EventEmitter<string>()
  }

  ngOnInit(): void {
    console.log("0ArticleViewer:",this.articleViewer)
  }


  ngOnChanges() {
    console.log("1ArticleViewer:",this.articleViewer.title?.length)
  }

  onClick() {
    this.articleChange.emit(this.articleViewer.title)
  }
}

