import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  images = [
    'assets/wtwr.jpg',
    'assets/news.jpg',
    'assets/around.jpg',
  ];
  imageTexts = [
    "What To Wear App",
    "News Explorer",
    "Around the US",
  ]

  imageLinks =[
    "https://github.com/jlcoding01/se_project_react",
    "https://newsexplorerapp.jumpingcrab.com/",
    "https://jlcoding01.github.io/se_project_aroundtheus/",
  ]

  logos =[
    'assets/react.svg',
    'assets/angular.svg',
    'assets/javascript.svg',
    'assets/typescript.svg',
    'assets/nodejs.svg',
    'assets/tailwind.svg',
    'assets/python.svg',
    'assets/html.svg',
    'assets/css.svg',
    'assets/github.svg',
    'assets/mongodb.svg',
    'assets/google-cloud.svg',
    'assets/aws.svg',
    'assets/ruby.svg',
    'assets/rails.svg',
    'assets/postman.svg',
    'assets/postgresql.svg',
    'assets/mysql.svg',
  ]

  activeIndex = 0;
  isSmallScreen: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  setActiveIndex(index: number): void {
    if (!this.isSmallScreen) {
      this.activeIndex = index;
    }
  }
}
