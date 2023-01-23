export interface DisplayedDay {
  day: number;
  dayOfWeek: string;
  month: string;
  year: number;
  displayDark: boolean;
  date: Date;
}

export interface DayBookingStatus extends DisplayedDay {
  isSelected: boolean;
  bookings: [];
}
export interface CalendarBooking {
  rentedAreaId: number;
  position: number;
  color: string;
  bookingStatus: ExportStatus;
}
export enum ExportStatus {
  START,
  MIDDLE,
  END,
  NONE,
}
