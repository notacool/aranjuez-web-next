import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselCoverPage() {
  const IMAGES = [
    "https://minio.notacool.com/aranjuez/interestingSites/web/puente de barcas/aranjuez_puente_de_barcas_1.jpg",
    "https://minio.notacool.com/aranjuez/interestingSites/web/iglesia de alpajes/aranjuez_iglesia_alpajes_1.jpg",
    "https://minio.notacool.com/aranjuez/interestingSites/web/casa de infantes/aranjuez_casa_de_infantes_5.jpg",
  ];

  return (
    <Carousel showThumbs={false} infiniteLoop showStatus={false} autoPlay>
      {IMAGES.map((image, index) => (
        <img key={index} width="100%" height="300vh" src={image} alt="Vista Aranjuez" />
      ))}
    </Carousel>
  );
}
