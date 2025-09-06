import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from './header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First-Angular-Project');
}
