import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  id:string|undefined;

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {this.id = param["id"]; console.log('param:',param)})
    console.log("this.route^", this.route)
  }
}
