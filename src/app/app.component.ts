import { Component } from '@angular/core';
import { user } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: user[]= [];


  userAdded(users: user[]){
    this.users = users;
  }
}
