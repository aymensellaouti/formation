import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'club'
})
export class ClubPipe implements PipeTransform {

  transform(value: any, arg1: string): any {
    switch (value) {
      case 'barca' : {
        return 'blaugrana ' + arg1;
      }
      case 'milan' : return 'rossonero' + arg1;
      case 'esperance' : return 'sang et or' + arg1;
      case 'marseille' : return 'OM' + arg1;
      default : return value;
    }
  }

}
