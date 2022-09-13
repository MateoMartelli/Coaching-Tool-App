const useCalendar = (gridSize: number, offset: number) => {
  const today = new Date();
  const isMonthInNextYear = today.getMonth() + offset > 11;
  const isMonthInPrevYear = today.getMonth() + offset < 0;

  const yearOffset = Math.floor((today.getMonth() + offset) / 12);

  const thisMonth = isMonthInNextYear
    ? (today.getMonth() + offset) % 12
    : isMonthInPrevYear
    ? (12 - (Math.abs(today.getMonth() + offset) % 12)) % 12
    : today.getMonth() + offset;

  const thisYear = today.getFullYear() + yearOffset;

  const firstDay = new Date(thisYear, thisMonth);
  const lastDay = new Date(thisYear, thisMonth + 1, 0);

  const lastDayOfLastMonth = new Date(thisYear, thisMonth, 0);

  const lastMonthLastDays = [];
  for (let i = 1; i <= firstDay.getDay(); i++)
    lastMonthLastDays.push(
      lastDayOfLastMonth.getDate() - (firstDay.getDay() - i)
    );

  const monthForCalendar = lastMonthLastDays.map((el) => el);
  for (let i = 0; i < lastDay.getDate(); i++) monthForCalendar.push(i + 1);

  for (
    let i = 0;
    i < gridSize - (lastDay.getDate() + lastMonthLastDays.length);
    i++
  )
    monthForCalendar.push(i + 1);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const month = months[thisMonth];

  return {
    month,
    today,
    thisMonth,
    thisYear,
    weekDays,
    monthForCalendar,
    monthOffsetBeging: firstDay.getDay(),
    monthOffsetEnding: lastDay.getDate() + lastMonthLastDays.length,
  };
};

export default useCalendar;
