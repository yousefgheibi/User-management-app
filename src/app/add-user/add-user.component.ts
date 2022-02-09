import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() onAddUserClicked = new EventEmitter<user[]>();

  users : user[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        email : 'ali@gmail.com',
        password : '123456',
        address : 'Urmia, Iran'
      },
      {
        email : 'hamid@gmail.com',
        password : '2345431',
        address : 'Tehran, Iran'
      },
      {
        email : 'mohsen@gmail.com',
        password : '1qaz!ED',
        address : 'Amsterdam'
      }
    ];
  }

  onAddUser(email: string, password: string, address: string , e: Event) {
    
    e.preventDefault();

    let u:user = {
      email: email,
      password: password,
      address: address
    }
  
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);
  }
}
