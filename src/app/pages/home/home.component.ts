import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  texts = ['Web Developer', 'Full Stack Engineer', 'Entrepreneur'];
  colors = ['text-indigo-300', 'text-sky-300', 'text-violet-300'];
  underlines = ['underline', 'underline', 'underline'];
  currentText = this.texts[0];
  currentClass = `${this.colors[0]} ${this.underlines[0]}`;
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.currentIndex];
      this.currentClass = `${this.colors[this.currentIndex]} ${this.underlines[this.currentIndex]}`;
    }, 2000);
  }
}
