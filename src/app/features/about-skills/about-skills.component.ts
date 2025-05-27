import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Skill {
  name: string;
  icon: string; // path para o ícone (assets/icons/...)
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
@Component({
  selector: 'app-about-skills',
  imports: [CommonModule],
  templateUrl: './about-skills.component.html',
  styleUrl: './about-skills.component.scss'
})
export class AboutSkillsComponent implements AfterViewInit {
    shouldAnimate = false;

  ngAfterViewInit(): void {
    // Delay para garantir que o DOM está pronto
    setTimeout(() => {
      this.shouldAnimate = true;
    }, 50);
  }
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'assets/icons/angular.svg' },
        { name: 'HTML5', icon: 'assets/icons/html5.svg' },
        { name: 'SCSS', icon: 'assets/icons/sass.svg' },
        { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: 'assets/icons/java.svg' },
        { name: 'Spring Boot', icon: 'assets/icons/spring.svg' },
        { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
        { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
      ]
    },
    {
      title: 'Outros',
      skills: [
        { name: 'Git', icon: 'assets/icons/git.svg' },
        { name: 'REST APIs', icon: 'assets/icons/restapi.svg' },
        { name: 'Figma', icon: 'assets/icons/figma.svg' },
        { name: 'Postman', icon: 'assets/icons/postman.svg' },
      ]
    }
  ];
}
