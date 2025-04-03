import { ImageList as MUIImageList, ImageListItem, ImageListItemBar } from "@mui/material";

export type ImageItemType = {url: string; title: string; subtitle?: string}

import {DEFAULT_COLS, DEFAULT_ROW_HEIGHT, DEFAULT_SIZE} from "./../../constant"

export interface ImageListProps {
  size?: {width?: number; height?: number};
  images: ImageItemType[];
  cols?: number;
  rowHeight?: number;
}

export default function ImageList({size, images, cols, rowHeight}: ImageListProps) {

  const sizeNormalize = {
    width: size?.width || DEFAULT_SIZE.width,
    height: size?.height || DEFAULT_SIZE.height 
  }

  const colsNormalize = cols || DEFAULT_COLS
  const rowHeightNormalize = rowHeight || DEFAULT_ROW_HEIGHT

  console.log(sizeNormalize)

  return (
    <MUIImageList sx={{...sizeNormalize}} cols={colsNormalize} rowHeight={rowHeightNormalize}>
      {images.map((image: ImageItemType, index: number) => (
        <ImageListItem key={index}>
          <img src={image.url} loading="lazy" />
          <ImageListItemBar {...image} />
        </ImageListItem>
      ))}
    </MUIImageList>
  )
}