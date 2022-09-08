import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'switchCase'
})
export class SwitchCasePipe implements PipeTransform {

  transform(str:string): string {
    let i =0;
    let newStr = "";
    for(i=0;i<str.length;i++){
      if(str[i] == str[i].toLowerCase()){
        newStr += str[i].toUpperCase();
      }
      else{
        newStr += str[i].toLowerCase();
      }
    }
    return newStr;
  }

}
