import { useState } from "react";
import { DateObject } from "react-multi-date-picker";

const useFindNow = () => {
  const [people, setPeople] = useState(1);
  const [checkIn, setCheckIn] = useState<DateObject>(new DateObject());
  const MAX_PEOPLE = 10;

  const increasePeople = () => {
    if (!(people + 1 > MAX_PEOPLE)) setPeople(people + 1);
  };
  const decreasePeople = () => {
    if (!(people - 1 < 1)) setPeople(people - 1);
  };

  const setCheckInDatePicker = (data: DateObject) => {
    setCheckIn(data);
  };

  return {
    decreasePeople,
    increasePeople,
    people,
    checkIn,
    setCheckInDatePicker,
  };
};
export default useFindNow;
