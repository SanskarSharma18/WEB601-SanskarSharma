import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SpaceContentService } from './services/spaceContentService';
import { FormsModule } from '@angular/forms';
import { Content } from './helper-files/content-interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentCardComponent,ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'S_Sharma_SpaceExploration';

  contentItem: Content | undefined;

  constructor(private spaceContentService: SpaceContentService) { }

  ngOnInit(): void {
    const id = 1; // Example id
    this.spaceContentService.getContentItemById(id)
      .subscribe(item => {
        this.contentItem = item;
      });
  }
}