import { Pipe, PipeTransform } from '@angular/core';
import { DateTools } from '../tools/date-tools';

@Pipe({
  name: 'monthToString',
})
export class MonthToStringConversionPipe implements PipeTransform {
  transform(value: number | undefined): string {
    return DateTools.convertMonthIntoMonthName(value);
  }
}
