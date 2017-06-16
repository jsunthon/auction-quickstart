import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
/**
 * Takes a list of objects and filters the irrelevant ones out, if
 * either filter by value or filter by field is falsy
 */
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterByField: string, filterByValue: string) {
    if (!filterByField || !filterByValue) {
      // console.log(filterByField);
      // console.log(filterByValue);
      return list;
    }

    return list.filter(item => {
      // console.log(JSON.stringify(item));
      const field = item[filterByField].toLowerCase();
      const filter = filterByValue.toLocaleLowerCase();
      return field.indexOf(filter) >= 0; // locate the index of filter in feilds
    });
  }
}
