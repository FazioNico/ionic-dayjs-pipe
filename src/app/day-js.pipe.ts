import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
dayjs.extend(relativeTime);

@Pipe({
  name: 'dayJS'
})
export class DayJSPipe implements PipeTransform {

  transform(value: string, method: 'formNow'|'toNow', withoutSuffix: boolean = false): string {
    switch (true) {
      case method === 'formNow':
        return dayjs(value).locale('fr').fromNow(withoutSuffix);  
      case method === 'toNow':
        return dayjs(value).locale('fr').toNow(withoutSuffix);    
      default:
        break;
    }
  }

}
