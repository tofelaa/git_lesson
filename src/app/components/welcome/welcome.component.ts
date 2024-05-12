import {Component} from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {BoardComponent} from "../board/board.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BoardComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {


  title = "Some text for title";
  buttonTitle = "Some text for button";
  isDisabled = true;

  welcomeFunction(){
    console.log("Hello, Sasha !");
  };



}
