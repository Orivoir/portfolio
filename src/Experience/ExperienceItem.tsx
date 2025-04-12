import {Paper, Typography } from "@mui/material";
import ExperienceItemHeader, { ExperienceItemHeaderProps } from "./ExperienceItemHeader";
import { JSX } from "@emotion/react/jsx-runtime";
import ImageList, { ImageListProps } from "../ImageList";

export interface ExperienceItemProps {
  header: ExperienceItemHeaderProps
  longDescribe: string | JSX.Element
  images?: ImageListProps
}

export default function ExperienceItem({
  header,
  longDescribe,
  images
}: ExperienceItemProps) {


  return (
    <Paper elevation={3} sx={{pt: 1, pb: 1, pl:4, pr: 4, mt: 2, mb: 2}}>
      
      <ExperienceItemHeader {...header} />

      {typeof longDescribe === "string" ?(
        <Typography variant="body2">{longDescribe}</Typography>
      ): longDescribe}

      {images && (
        <ImageList {...images} />
      )}

    </Paper>
  )
}