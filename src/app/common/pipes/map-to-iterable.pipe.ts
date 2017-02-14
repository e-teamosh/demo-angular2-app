import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {
  transform(dict: {[key: string]: Object}): Array<{key: string, val: Object}> {
    let a: Array<{key: string, val: Object}> = [];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }
}
