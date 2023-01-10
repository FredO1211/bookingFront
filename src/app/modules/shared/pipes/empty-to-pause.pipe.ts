import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyToPause',
})
export class EmptyToPausePipe implements PipeTransform {
  transform(value: string | Date | number): string {
    if (value && value.toString() != '') {
      return value.toString();
    }
    return '-';
  }
}
