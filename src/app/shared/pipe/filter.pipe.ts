import { Pipe, PipeTransform } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term): any {
    console.log('term', term);


   return term ? items.filter(item => item.firstname.indexOf(term) !== -1) : items;
  }
}



