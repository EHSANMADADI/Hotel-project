import { useState } from "react";

const useStats = () => {
  const [activeCardId, setActiveCardId] = useState(-1);

  const onMouseEnter = (id: number) => {
    setActiveCardId(id);
  };
  const onMouseLeave = () => {
    setActiveCardId(-1);
  };

  return { onMouseEnter, onMouseLeave, activeCardId };
};
export default useStats;
