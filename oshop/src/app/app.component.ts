import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    router: Router
  ) {
    auth.user$.subscribe((user: any) => {
      if (user) {
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl')!;
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
