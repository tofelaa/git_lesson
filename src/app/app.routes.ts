import { Routes } from '@angular/router';
import {BoardComponent} from "./components/board/board.component";
import {AboutComponent} from "./about/about.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ProfileComponent} from "./profile/profile.component";
import {AboutteamComponent} from "./aboutteam/aboutteam.component";

export const routes: Routes = [
  {path:"", component:BoardComponent},
  {path:"home", redirectTo:"", pathMatch:"full"},
  {path:"about", component:AboutComponent, children:[{path:"aboutteam", component:AboutteamComponent}]},
  //{path:"about/aboutteam", component:AboutteamComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:"**", component:NotfoundComponent}
];
