export class DateTools {
  private static readonly DAY_IN_MILISECONDS = 86400000;

  static plusDays(date: Date, count: number): Date {
    return new Date(date.getTime() + count * this.DAY_IN_MILISECONDS);
  }

  static minusDays(date: Date, count: number): Date {
    return new Date(date.getTime() - count * this.DAY_IN_MILISECONDS);
  }

  static convertDayIntoDayName(value: number | undefined): string {
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

  static convertMonthIntoMonthName(value: number | undefined): string {
    switch (value) {
      case 0:
        return 'Styczeń';
      case 1:
        return ' Luty';
      case 2:
        return 'Marzec';
      case 3:
        return 'Kwiecień';
      case 4:
        return 'Maj';
      case 5:
        return 'Czerwiec';
      case 6:
        return 'Lipiec';
      case 7:
        return 'Sierpień';
      case 8:
        return 'Wrzesień';
      case 9:
        return 'Październik';
      case 10:
        return 'Listopad';
      case 11:
        return 'Grudzień';
      default:
        return '';
    }
  }
}
