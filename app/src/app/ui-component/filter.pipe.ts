import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[]  {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
    var cardTitle = it.cardTitle.toLocaleLowerCase();
    var cardDescription = it.cardDescription.toLocaleLowerCase();
    cardTitle = cardTitle.indexOf(searchText);
    cardDescription = cardDescription.indexOf(searchText);
      return cardTitle >= 0 || cardDescription >= 0;
    });
  }

}
