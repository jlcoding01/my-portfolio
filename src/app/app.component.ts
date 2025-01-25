import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:"My Portofolio",
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
