import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  buildDate: Date;

  constructor(public authSvc: AuthService) {
    this.buildDate = new Date();
  }

}
