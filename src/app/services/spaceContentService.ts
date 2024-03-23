import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface'; // Import Content interface if needed

@Injectable({
  providedIn: 'root'
})
export class SpaceContentService {

  constructor() { }

  getContentArray(): Observable<Content[]> {
    return of(contentArray);
  }

  getContentItemById(id: number): Observable<Content | undefined> {
    const contentItem = contentArray.find(item => item.id === id);
    return of(contentItem);
  }
}
