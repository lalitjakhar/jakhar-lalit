import Image, { ImageProps } from "next/image";

type SeoImageProps = Omit<ImageProps, "alt" | "unoptimized"> & {
  alt: string;
};

export default function SeoImage({
  alt,
  sizes,
  ...props
}: SeoImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      unoptimized
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
    />
  );
}
