export interface PbDate {
  year: number;
  month: number;
  day: number;
}

export interface PbHoliday {
  name: string;
  date: PbDate;
}

export interface PbCyclicEvent {
  name: string;
  cycleLength: number;
  cycleType: 'day' | 'month' | 'year';
}
