import { addMilliseconds, intervalToDuration } from 'date-fns';

export const formatTimeToWords = (time: number) => {
  const date = new Date();
  const { years, months, days, hours, minutes } = intervalToDuration({
    start: date,
    end: addMilliseconds(date, time)
  });
  
  return `${years}y, ${months}m, ${days}d, ${hours}h, ${minutes}min`;
}
