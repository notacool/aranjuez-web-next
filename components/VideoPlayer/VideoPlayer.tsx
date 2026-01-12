import React from "react";
import ReactPlayer from "react-player";
import { useScreenSize } from "@hooks/useScreenSize";
interface IVideoProps {
  url: string;
  image: string;
}
export default function VideoPlayer(props: IVideoProps) {
  const { isDesktop } = useScreenSize();
  return (
    <ReactPlayer
      url={props.url}
      width="100%"
      height="50vh"
      controls
      light={props.image}
      crossOrigin="anonymous"
      config={{
        file: {
          attributes: {
            crossOrigin: "anonymous",
          },
        },
      }}
    />
  );
}
