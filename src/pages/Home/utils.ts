import { formatTimeToWords } from '../../utils';

export const getTotalTime = (items: any = []): [string, string, string] => {
  const { totalClockedInTime, totalProductiveTime, totalUnproductiveTime } = Array.isArray(items) && items.reduce(
    (acc: any, curr: any) => {
      const { totalProductiveTime, totalUnproductiveTime } = curr;
      console.info(curr);

      acc.totalProductiveTime += totalProductiveTime;
      acc.totalUnproductiveTime += totalUnproductiveTime;
      acc.totalClockedInTime += totalProductiveTime + totalUnproductiveTime;

      return acc;
    },
    {
      totalClockedInTime: 0,
      totalProductiveTime: 0,
      totalUnproductiveTime: 0,
    }
  );

  return [
    formatTimeToWords(totalClockedInTime),
    formatTimeToWords(totalProductiveTime),
    formatTimeToWords(totalUnproductiveTime)
  ];
};
