import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('First-Angular-Project');
  users = DUMMY_USERS;
  onSelectUser(id: string){
    console.log('Selected user is '+ id);
    
  }
}
