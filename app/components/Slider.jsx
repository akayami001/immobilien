import { useState } from "react";
import Image from "next/image";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <Image src="/arrow.png" width={24} height={32} alt="arrow" />
          </div>
          <div className="imgContainer">
            <Image src={images[imageIndex]} width={24} height={32} alt="index" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <Image src="/arrow.png" width={24} height={32} className="right" alt="arrow" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <Image src={images[0]} width={24} height={32} alt="index" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <Image
            src={image}
            alt="index"
            key={index}
            onClick={() => setImageIndex(index + 1)}
            width={24} height={32}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;