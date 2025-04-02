import { Avatar, useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useState } from "react"

export interface PortraitProps {
  source?: string
  size?: number
}

export const DEFAULT_SIZE_PORTRAIT = 72
export const MIN_SIZE_PORTRAIT = 32

export default function Portrait({source, size}: PortraitProps) {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const [normalizeSize, setNormalizeSize] = useState<number | undefined>(size)

  const sizeReducer = (sizeToReduce: number) => {

    const pct = (sizeToReduce / 100) * 20

    sizeToReduce -= pct

    if(sizeToReduce < MIN_SIZE_PORTRAIT) {
      return MIN_SIZE_PORTRAIT
    }

    return Math.round(sizeToReduce)
  }

  useEffect(() => {
    
    if(!size) {
      size = DEFAULT_SIZE_PORTRAIT
    }

    if(size < MIN_SIZE_PORTRAIT) {
      size = MIN_SIZE_PORTRAIT
    }

    if(!matches) {
      // reducer
      setNormalizeSize(sizeReducer(size))
    } else {
      setNormalizeSize(size)
    }

  }, [matches])

  return (
    <Avatar sx={{width: normalizeSize, height: normalizeSize}} src={source || "https://placehold.co/600x400"} />
  )
}