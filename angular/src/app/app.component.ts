import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userapp';
  isAlternateTheme = false;

  toggleTheme() {
    this.isAlternateTheme = !this.isAlternateTheme;
  }
}
