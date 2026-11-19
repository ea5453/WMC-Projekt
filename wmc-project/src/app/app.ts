import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';;
import { Navigation } from './shell/navigation/navigation';

@Component({
  imports: [RouterOutlet, RouterLink, Navigation],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('wmc-project');
  test = 'Hello World';
}
