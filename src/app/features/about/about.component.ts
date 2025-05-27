import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AboutSkillsComponent } from '../about-skills/about-skills.component';

@Component({
  selector: 'app-about',
  imports: [MatButtonModule,AboutSkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
