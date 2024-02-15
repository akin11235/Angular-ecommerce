import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrl: './bs-navbar.component.css',
})
export class BsNavbarComponent {
  // user$: Observable<firebase.User> | any;
  constructor(public auth: AuthService) {
    // this.user$ = afAuth.authState;
    // console.log(this.user$);
  }
  logout() {
    this.auth.logout();
  }
}
