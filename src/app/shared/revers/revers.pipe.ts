import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revers',
  standalone: true
})
export class ReversPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(str?:string): string {
    let rez: string ='';
    if (str){
      rez = str.split("").reverse().join("");
    }
    return rez;
  }

}
