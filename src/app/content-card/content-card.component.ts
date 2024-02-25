import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {HoverAffectDirective} from '../directives/hover-affect.directive';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})

export class ContentCardComponent {
showDetails() {
throw new Error('Method not implemented.');
}
  @Input() content: any;
  @Input() borderStyle: string = '1px solid #000';
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false; 
  displayInfo() {
    console.log(`ID: ${this.content.id}, Title: ${this.content.title}`);
  }
  handleClick() {
    console.log('Image clicked:', this.content.id, this.content.title);
    // Add any other logic you want to execute on click
  }
}