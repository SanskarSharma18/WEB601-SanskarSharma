import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})

export class ContentCardComponent {

  contentList: ContentList = new ContentList();

  constructor() { 

    this.contentList.add({
      id: 1,
      title: 'Mars',
      description: 'The fourth planet from the Sun in our solar system.',
      creator: 'NASA',
      imgURL: 'mars.jpg',
      type: 'Planet',
      tags: ['Red Planet', 'Exploration']
    });

    this.contentList.add({
      id: 2,
      title: 'Jupiter',
      description: 'The largest planet in our solar system, known for its giant storms.',
      creator: 'European Space Agency (ESA)',
      imgURL: 'jupiter.jpg',
      type: 'Planet',
      tags: ['Gas Giant', 'Storms']
    });

    this.contentList.add({
      id: 3,
      title: 'Voyager 1',
      description: 'A space probe launched by NASA in 1977. It has reached interstellar space.',
      creator: 'NASA',
      imgURL: 'voyager.jpg',
      type: 'Space Probe',
      tags: ['Interstellar', 'NASA Mission']
    });
  }
}