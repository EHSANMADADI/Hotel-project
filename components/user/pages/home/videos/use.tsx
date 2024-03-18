import { useSetState } from "@mantine/hooks";
import { useState } from "react";

const useVideos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeVideo, setActiveVideo] = useSetState({ src: "", poster: "" });

  const handleSetActiveVideo = (src: string, poster: string) => {
    setActiveVideo({ poster, src });
    setOpenModal(true);
  };

  return {
    openModal,
    setOpenModal,
    activeVideo,
    setActiveVideo,
    handleSetActiveVideo,
  };
};
export default useVideos;
