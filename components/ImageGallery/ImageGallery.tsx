import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useScreenSize } from "@hooks/useScreenSize";

interface IImageProps {
  images: any;
}
export default function ImageGalleries(props: IImageProps) {
  const { isDesktop } = useScreenSize();

  return (
    <ImageGallery
      items={props.images}
      showIndex={false}
      showThumbnails={isDesktop ? true : false}
      lazyLoad={false}
      showPlayButton={false}
      showNav={true}
      thumbnailPosition={"top"}
    />
  );
}
