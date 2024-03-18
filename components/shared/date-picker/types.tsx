import { DateObject } from "react-multi-date-picker";

export default interface DatePickeerImpl {
  value: DateObject | undefined;
  onChange(date: DateObject): void;
}
