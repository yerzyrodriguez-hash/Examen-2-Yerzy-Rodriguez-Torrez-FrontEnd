import { Component,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Probablemente ya tengas esto

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Examen2FrontEnd');
}