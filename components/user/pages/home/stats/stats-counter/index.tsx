import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import StatsCounterImpl from "./types";
import { memo } from "react";

const StatsCounter = ({ count }: StatsCounterImpl) => {
  return (
    <>
      <CountUp end={count} redraw={true}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span className="font-extrabold text-4xl my-1" ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
};

export default memo(StatsCounter);
