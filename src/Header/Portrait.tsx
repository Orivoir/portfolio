import { Avatar } from "@mui/material"

export interface PortraitProps {
  source?: string
  size?: number
}

export default function Portrait({source, size}: PortraitProps) {

  return (
    <Avatar sx={{width: size || 72, height: size || 72}} src={source || "https://placehold.co/600x400"} />
  )
}