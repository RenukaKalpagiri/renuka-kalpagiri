
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  menuOpen = false;

  skills = [
    'Angular', 'React JS', 'JavaScript', 'TypeScript',
    'HTML5', 'CSS3', 'SCSS', 'Redux',
    'Context API', 'PrimeNG', 'PrimeReact',
    'Bootstrap', 'REST APIs', 'Git', 'GitHub'
  ];

  projects = [
    {
      name: 'OPAL Healthcare',
      category: 'Healthcare Application',
      technology: 'Angular 17 · PrimeNG · TypeScript',
      description: 'A healthcare application focused on structured workflows, reusable UI components and data management.',
      number: '01'
    },
    {
      name: 'Autistica Study & Research',
      category: 'Research Application',
      technology: 'React JS · PrimeReact · JavaScript',
      description: 'A research platform with reusable components, responsive interfaces and API integrations.',
      number: '02'
    },
    {
      name: 'Salvis Marketing',
      category: 'Marketing Application',
      technology: 'Angular 13 · PrimeNG',
      description: 'A marketing application featuring interactive UI components and responsive layouts.',
      number: '03'
    },
    {
      name: 'Collude Corporate Communication',
      category: 'SaaS Application',
      technology: 'Angular · Bootstrap · PrimeNG',
      description: 'A corporate communication application with reusable components and structured user interfaces.',
      number: '04'
    }
  ];

  closeMenu(): void {
    this.menuOpen = false;
  }
}
