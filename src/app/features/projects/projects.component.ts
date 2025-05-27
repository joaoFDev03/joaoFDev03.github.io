import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isComplete:boolean=false
  projects:Project[] = [
    {
      title: 'Dashboard Angular',
      description: 'Aplicação administrativa com gráficos interativos, login JWT e integração REST.',
      link: 'https://github.com/seu-utilizador/dashboard-angular',
      isDone: true
    },
    {
      title: 'Loja Online com Spring Boot',
      description: 'Backend robusto com Spring Security, carrinho de compras e integração com Stripe.',
      link: 'https://github.com/seu-utilizador/loja-springboot',
      isDone: true
    },
    {
      title: 'Portfolio em Angular',
      description: 'Este portfólio pessoal desenvolvido com Angular e design orgânico minimalista.',
      link: 'https://github.com/seu-utilizador/portfolio-angular',
      isDone: false
    }
  ];
  constructor() {
    // Inicialização ou lógica adicional, se necessário
    this.projects.forEach(project => {
      if (!project.isDone) {
        project.description = 'Projeto em desenvolvimento. Em breve novidades!';
        project.link = '#';
        this.isComplete = true;
      }
    })
  }
}
interface Project{
  title: string;
  description: string;
  link: string;
  isDone: boolean;
}
