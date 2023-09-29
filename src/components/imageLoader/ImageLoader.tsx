import { useState } from "react";

type Props = {
  style: string;
  src: string;
  alt?: string;
};

const ImageLoader = ({ style, src, alt }: Props) => {
  const [error, setError] = useState(false);

  return error ? (
    //Local fallback
    <picture>
      <source srcSet={`${src.slice(0, -3)}webp`} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <img
        className={style}
        src={src}
        alt={alt ? alt : "image of a store product"}
        loading="lazy"
      />
    </picture>
  ) : (
    //Image from ImageKit
    <img
      onError={() => setError(true)}
      className={style}
      src={`https://ik.imagekit.io/6lmck6z8g/tr:w-800/cool-store/${src}`}
      alt={alt ? alt : "image of a store product"}
      loading="lazy"
      srcSet={`https://ik.imagekit.io/6lmck6z8g/tr:w-400/cool-store/${src} 400w, https://ik.imagekit.io/6lmck6z8g/tr:w-600/cool-store/${src} 600w, https://ik.imagekit.io/6lmck6z8g/tr:w-1000/cool-store/${src} 1000w, https://ik.imagekit.io/6lmck6z8g/tr:w-1200/cool-store/${src} 1200w`}
    />
  );
};

export default ImageLoader;
