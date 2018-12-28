import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private appComponent: AppComponent,
    public authSvc: AuthService
  ) {}

  toggleTheme() {
    this.appComponent.toggleTheme();
  }

}
