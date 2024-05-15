import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true
})
export class BoldDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
this.el.nativeElement.style.fontWeight = "bold";
    console.log("boldDir")
  }
}
