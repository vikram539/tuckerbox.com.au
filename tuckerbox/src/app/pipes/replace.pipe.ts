import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var re = /-/gi; //re = Regular Expression 

    if (value.search(re) == -1 ){ 
      return value.replace(/\s/g, "-").toLowerCase(); // If Not match
    } 
    else { 
      return value.replace("-", " "); // If  match
    }
  }

}
