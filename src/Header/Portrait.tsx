import { Avatar, useMediaQuery, useTheme } from "@mui/material"

export interface PortraitProps {
  source?: string
  size?: number
}

export const DEFAULT_SIZE_PORTRAIT = 72
export const MIN_SIZE_PORTRAIT = 32

export default function Portrait({source, size}: PortraitProps) {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const sizeReducer = (sizeToReduce: number) => {
    const reducedSize = sizeToReduce * 0.8
    return Math.max(Math.round(reducedSize), MIN_SIZE_PORTRAIT)
  }

  if(!size) {
    size = DEFAULT_SIZE_PORTRAIT
  }

  const normalizeSize = matches ? Math.max(size, MIN_SIZE_PORTRAIT) : sizeReducer(size)

  return (
    <Avatar sx={{width: normalizeSize, height: normalizeSize}} src={source || "https://placehold.co/600x400"} />
  )
}