import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter',
  standalone: true
})
export class TypeFilterPipe implements PipeTransform {
  transform(contentArray: Content[], type: string): Content[] {
    if (!type) {
      
        return contentArray.filter(content => !content.type);
    } 
    
    else {
      
        return contentArray.filter(content => content.type === type);
    
    }
 
}
}