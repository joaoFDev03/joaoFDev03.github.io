import { CommonModule } from '@angular/common';
import {Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
interface Particle {
  left: number;
  delay: number;
  duration: number;
  top: number;

}
@Component({
  selector: 'app-landingpage',
  imports: [RouterModule,CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']  // aqui

})
export class LandingpageComponent implements OnInit {
  url = '/home';
  currentText = '';
  fullText = 'Olá, eu sou o João 👋';
  index = 0;

  particles: Particle[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.typeWriter();
    this.generateParticles();
  }

  typeWriter(): void {
    if (this.index < this.fullText.length) {
      this.currentText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 100);
    }
  }

  generateParticles(): void {
    const numParticles = 60;
    this.particles = Array.from({ length: 60 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      top: Math.random() * 100  // entre 0vh e 100vh
    }));

  }
}
