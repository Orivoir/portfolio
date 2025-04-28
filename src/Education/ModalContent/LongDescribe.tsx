import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export default function LongDescribe({describe}: {describe: string}) {

  const [hasShowMore, setHasShowMore] = useState<boolean>(false)

  const toggleState = () => (
    setHasShowMore(currentValue => !currentValue)
  )

  const theme = useTheme()
  const matchesDownMd = useMediaQuery(theme.breakpoints.down("md"))

  const withReadMore = () => (
  <>
  {describe.slice(0, !hasShowMore ? 255: Infinity)} {!hasShowMore ? "...": ""}
  <Typography
    component="span"
    onClick={toggleState}
    sx={{
      color: 'primary.main',
      cursor: 'pointer',
      fontWeight: 500,
      display: 'inline',
      '&:hover': {
        textDecoration: 'underline',
      },
    }}
  >
    {hasShowMore ? 'Réduire' : 'Lire plus'}
  </Typography>
  </>
  )

  return (
    <Box>

      <Typography sx={{lineHeight: "1.33rem"}} variant="body2">
        {!matchesDownMd ? withReadMore(): describe}
      </Typography>
    </Box>
  )
}