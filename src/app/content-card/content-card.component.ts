import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})

export class ContentCardComponent {
  @Input() content: any;
  @Input() borderStyle: string = '1px solid #000';  
  displayInfo() {
    console.log(`ID: ${this.content.id}, Title: ${this.content.title}`);
  }
  handleClick() {
    console.log('Image clicked:', this.content.id, this.content.title);
    // Add any other logic you want to execute on click
  }
}