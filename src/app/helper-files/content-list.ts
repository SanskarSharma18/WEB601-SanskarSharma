
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  getContentArray(): Content[] {
    return this.contentArray;
  }

  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  getItemCount(): number {
    return this.contentArray.length;
  }

  getContentDetails(index: number): string {
    if (index < 0 || index >= this.contentArray.length) {
      return '<p>Error: Index out of range</p>';
    }

    const contentItem = this.contentArray[index];

    return `
      <p>Title: ${contentItem.title}</p>
      <p>Description: ${contentItem.description}</p>
      <p>Creator: ${contentItem.creator}</p>
      <p>Image URL: ${contentItem.imgURL || 'N/A'}</p>
      <p>Type: ${contentItem.type || 'N/A'}</p>
    `;
  }
}
