import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(qualities: any, term: any): any {
    //check if search term is undefined
    if(term===undefined) return qualities;

    return qualities.filter(function(quality){
      return quality.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
