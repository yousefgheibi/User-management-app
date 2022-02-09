import { Component, Input, OnInit } from '@angular/core';
import { user } from '../user.interface';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  @Input() users : user[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
