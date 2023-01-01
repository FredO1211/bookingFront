import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayToString',
})
export class DayToStringConversionPipe implements PipeTransform {
  transform(value: number | undefined): string {
    switch (value) {
      case 0:
        return 'Niedziela';
      case 1:
        return 'Poniedziałek';
      case 2:
        return 'Wtorek';
      case 3:
        return 'Środa';
      case 4:
        return 'Czwartek';
      case 5:
        return 'Piątek';
      case 6:
        return 'Sobota';
      default:
        return '';
    }
  }
}
