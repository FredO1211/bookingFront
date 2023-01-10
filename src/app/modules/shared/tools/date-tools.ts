export class DateTools {
  private static readonly DAY_IN_MILISECONDS = 86400000;

  static plusDays(date: Date, count: number): Date {
    return new Date(date.getTime() + count * this.DAY_IN_MILISECONDS);
  }

  static minusDays(date: Date, count: number): Date {
    return new Date(date.getTime() - count * this.DAY_IN_MILISECONDS);
  }
}
