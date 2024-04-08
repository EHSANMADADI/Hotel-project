import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import StatsCounterImpl from "./types";
import { memo } from "react";

const StatsCounter = ({ count, classNames }: StatsCounterImpl) => {
  return (
    <>
      <CountUp end={count} redraw={false}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span className={`font-bold text-4xl my-1 ${classNames} `} ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
};

export default memo(StatsCounter);
