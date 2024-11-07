import type { ImgHTMLAttributes } from 'react';

type TUiImageProps = {
  src: string;
  alt: string;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const UiImage = ({ src, alt, className, ...props }: TUiImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};
