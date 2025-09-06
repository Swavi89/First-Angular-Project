import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from './header/header.component';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First-Angular-Project');
}
