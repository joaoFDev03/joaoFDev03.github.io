import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-root",
  imports: [RouterOutlet,NavbarComponent,    FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLayout = true;

  constructor(private router: Router) {
    // Deteta a rota atual
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Mostra navbar/footer em todas, menos na root (landingpage)
      this.showLayout = event.urlAfterRedirects !== '/';
    });
  }
}
