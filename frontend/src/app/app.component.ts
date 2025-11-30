import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Home],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  protected readonly title = signal('sistema-estoque');
}
