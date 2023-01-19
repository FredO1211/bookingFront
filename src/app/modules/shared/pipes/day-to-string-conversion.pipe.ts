import { Pipe, PipeTransform } from '@angular/core';
import { DateTools } from '../tools/date-tools';

@Pipe({
  name: 'dayToString',
})
export class DayToStringConversionPipe implements PipeTransform {
  public transform(value: number | undefined): string {
    return DateTools.convertDayIntoDayName(value);
  }
}
