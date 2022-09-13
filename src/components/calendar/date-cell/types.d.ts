interface DateCellProps {
  day: number;
  month: number;
  year: number;
  currentDate: Date;
  monthOffsetBeging: number;
  monthOffsetEnding: number;
  index: number;
  tasks: { title: string; date: Date }[];
}
