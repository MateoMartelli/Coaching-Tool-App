const useDateCell = (
  currentDate: Date,
  day: number,
  month: number,
  year: number,
  index: number,
  monthOffsetBeging: number,
  monthOffsetEnding: number,
  tasks?: {
    title: string;
    date: Date;
  }[]
) => {
  const isToday =
    day === currentDate.getDate() &&
    month === currentDate.getMonth() &&
    year === currentDate.getFullYear();

  const outOfBounds = index < monthOffsetBeging || index >= monthOffsetEnding;

  if (!tasks) return { isToday };

  const todayTasks = tasks
    .filter(
      (task) =>
        task.date.getMonth() >= month - 1 && task.date.getMonth() <= month + 1
    )
    .filter(
      (task) =>
        (!outOfBounds &&
          task.date.getMonth() === month &&
          task.date.getDate() === day) ||
        (outOfBounds &&
          task.date.getMonth() === month - 1 &&
          task.date.getDate() === day &&
          task.date.getDate() > 15) ||
        (outOfBounds &&
          task.date.getMonth() === month + 1 &&
          task.date.getDate() === day &&
          task.date.getDate() < 15)
    );

  const firstTask = todayTasks[0];

  const tooltipLabel = firstTask ? `${firstTask.title}` : "";

  const tooltipBody = firstTask
    ? `${firstTask.date.getHours()}:${
        firstTask.date.getMinutes() < 10
          ? "0" + firstTask.date.getMinutes()
          : firstTask.date.getMinutes()
      }hs`
    : "";

  const isThisMonthTask =
    firstTask && firstTask.date.getMonth() === currentDate.getMonth();

  const isNextMonthTask =
    firstTask && firstTask.date.getMonth() > currentDate.getMonth();

  const isPostCurrentDay =
    firstTask?.date.getMonth() > currentDate.getMonth() ||
    (firstTask?.date.getMonth() === currentDate.getMonth() &&
      firstTask?.date.getDate() >= currentDate.getDate());

  const cellColor = !firstTask
    ? "transparent"
    : isPostCurrentDay && (isThisMonthTask || isNextMonthTask)
    ? "green.500"
    : "red.500";

  return {
    firstTask,
    isToday,
    outOfBounds,
    cellColor,
    tooltipLabel,
    todayTasks,
    tooltipBody,
  };
};

export default useDateCell;
