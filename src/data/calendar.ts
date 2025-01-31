import type { PbCyclicEvent, PbHoliday } from './types';

export const startDate = new Date(2012, 12, 21); // the end of the mayan calendar
export const daysInYear = 364;
export const blueMoonDays = 28;
export const greenMoonDays = 14;
export const crimsonMoonDays = 52;

export const months = [
  'Choryn',
  'Nexvar',
  'Lumiel',
  'Equilar',
  'Kaelvos',
  'Nyssarion',
  'Orynthas',
  'Terralis',
  'Aqualis',
  'Zephyra',
  'Pyrestra',
  'Vitaeon',
  'Corvithor',
];

export const holidays: PbHoliday[] = [];

export const events: PbCyclicEvent[] = [];
