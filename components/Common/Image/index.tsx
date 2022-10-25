import type {
  ImageLoaderProps,
  ImageProps as NextImageProps,
} from 'next/image';
import NextImage from 'next/image';
import { useCallback } from 'react';

type ImageProps = {
  width: number;
  height?: never;
  layout: ImageLayout;
  aspectRatio: AspectRatio;
  fit?: ImageFit;
} & DistributiveOmit<NextImageProps, 'height'>;

export function Image({
  width,
  fit = 'fill',
  aspectRatio,
  ...nextImageProps
}: ImageProps) {
  const height = calcAspectRatio(aspectRatio, width);

  const imageLoader = useCallback(
    (loaderArgs: ImageLoaderProps) => {
      const h = calcAspectRatio(aspectRatio, loaderArgs.width);

      return `${loaderArgs.src}?w=${loaderArgs.width}&h=${h}&fit=${fit}`;
    },
    [aspectRatio, fit]
  );

  return (
    <NextImage
      {...nextImageProps}
      width={width}
      height={height}
      loader={imageLoader}
    />
  );
}

export type ImageFit = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';

export type AspectRatio =
  | '16:9'
  | '4:3'
  | '1:1'
  | '3:2'
  | '9:12'
  | '3:1'
  | '4:1'
  | '2:3';

// Next.js sadly don't export it
export type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive';

// https://davidgomes.com/pick-omit-over-union-types-in-typescript/
type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

const aspectRatioToRatio: Record<AspectRatio, number> = {
  '1:1': 1,
  '16:9': 9 / 16,
  '4:3': 3 / 4,
  '2:3': 3 / 2,
  '3:2': 2 / 3,
  '3:1': 1 / 3,
  '4:1': 1 / 4,
  '9:12': 12 / 9,
};

function calcAspectRatio(aspectRatio: AspectRatio, width: number): number {
  const ratio = aspectRatioToRatio[aspectRatio];

  return Math.floor(width * ratio);
}
