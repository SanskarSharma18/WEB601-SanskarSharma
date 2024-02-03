import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule,ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  @Input() content: any;
  @Input() borderStyle: string = '1px solid #000';  
  displayInfo: boolean = true; 
  contentList: any[] = [
  
    {id: 1,
      title: 'Mars',
      description: 'The fourth planet from the Sun in our solar system.',
      creator: 'NASA',
      imgURL: 'data:image/jpeg;base64,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',
      type: 'Planet',
      tags: ['Red Planet', 'Exploration']},
      {id: 2,
        title: 'Jupiter',
        description: 'The largest planet in our solar system, known for its giant storms.',
        creator: 'European Space Agency (ESA)',
        imgURL: 'data:image/jpeg;base64,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',
        type: 'Planet',
        tags: ['Gas Giant', 'Storms']
      },
      {id: 3,
        title: 'Voyager 1',
        description: 'A space probe launched by NASA in 1977. It has reached interstellar space.',
        creator: 'NASA',
        imgURL: 'data:image/jpeg;base64,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',
        type: 'Space Probe',
        tags: ['Interstellar', 'NASA Mission']

      }
  ];
  handleClick() {
    console.log('Image clicked:', this.content.id, this.content.title);
    // Add any other logic you want to execute on click
  }
}

