import { Box, Stack, useMediaQuery, useTheme } from "@mui/material"
import Title from "./Title"
import {ImageListProps, default as ModalImageList} from "../../ImageList"
import LongDescribe from "./LongDescribe"
import { JSX } from "@emotion/react/jsx-runtime"

export interface ModalContentProps {
  longDescribe: string;
  title: string;
  subtitle: string;
  date: [string, string];
  images?: ImageListProps;
  actions?: JSX.Element
}

export default function ModalWebForce3({
  longDescribe,
  date,
  subtitle,
  title,
  images,
  actions,
}: ModalContentProps) {

  const theme = useTheme()
  const matchesDownSm = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Title
        date={date}
        title={title}
        subtitle={subtitle} />

      <Box sx={{mt: 4}}>
        <LongDescribe describe={longDescribe} />

        {images && (<ModalImageList {...images} />)}

        {actions && (
        <Stack direction={matchesDownSm ? "column": "row"} spacing={4} sx={{mt: 4}}>{actions}</Stack>
        )}
      </Box>
    </>
  )
}