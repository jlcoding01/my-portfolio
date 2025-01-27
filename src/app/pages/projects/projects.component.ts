import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  images = [
    'assets/1.jpg', // Replace with your image paths
    'assets/2.jpg',
    'assets/3.jpg',
  ];

  activeIndex = 0; // Start with the first image as active

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }
}
