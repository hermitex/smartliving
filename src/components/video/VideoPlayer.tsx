import React from "react";
import { Box } from "@mui/material";

interface VideoProps {
  activeTab: number;
}

const VideoPlayer: React.FC<VideoProps> = ({ activeTab }) => {
  const videos = [
    "https://www.youtube.com/embed/Ozq-d0jwFyU",
    "https://www.youtube.com/embed/H2MWb1YfDqo", //lutron

    // Add more video URLs as needed
  ];

  const videoUrl = `${videos[activeTab]}?rel=0`; // Append ?rel=0 to the URL

  return (
    <Box>
      <iframe
        width="100%"
        height="380" // You can adjust the height as needed
        src={videoUrl}
        title="Video Player"
        allowFullScreen
      />
    </Box>
  );
};

export default VideoPlayer;
