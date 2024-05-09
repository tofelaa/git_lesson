import { Component } from '@angular/core';

@Component({
  selector: 'app-lint-ex',
  standalone: true,
  imports: [],
  templateUrl: './lint-ex.component.html',
  styleUrl: './lint-ex.component.css'
})
export class LintExComponent {


  checkLintFunction(){
    console.log("Hello, Lint !")
  };

}
