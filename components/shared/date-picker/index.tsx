import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePickeerImpl from "./types";
import { ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";
import "./date-pickeer.css";

const DatePickeer = ({ onChange, value }: DatePickeerImpl) => {
  return (
    <>
      <DatePicker
        value={value}
        onChange={onChange}
        calendar={persian}
        locale={persian_fa}
        fixMainPosition={true}
        highlightToday={false}
        calendarPosition="bottom-center"
        shadow={false}
        arrow={false}
        renderButton={(
          direction: "right" | "left",
          handleClick: () => void
        ) => (
          <button onClick={handleClick}>
            {direction === "right" ? (
              <ArrowSquareLeft
                size="20"
                className="text-primary transition-all hover:text-cyan-700 active:scale-95 ml-2"
              />
            ) : (
              <ArrowSquareRight
                size="20"
                className="text-primary transition-all hover:text-cyan-700 active:scale-95 mr-2"
              />
            )}
          </button>
        )}
      />
    </>
  );
};
export default DatePickeer;
