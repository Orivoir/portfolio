import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export interface ExperienceItemHeaderProps {
  company: string;
  postName: string;
  dateStart: string;
  dateEnd?: string;
  location: string;
}


export default function ExperienceItemHeader({
  company,
  dateStart,
  location,
  postName,
  dateEnd
}: ExperienceItemHeaderProps) {


  const theme = useTheme()

  const matchesDownSm = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
    <Box>

        <Box sx={{display: "flex", flexDirection: matchesDownSm ? "column": "row", alignItems: matchesDownSm ? "flex-start" :"center", columnGap: theme.spacing(2)}}>
          <Typography variant="h4" component="h4">{company}</Typography>

          <Typography variant="subtitle1">
            <DateRangeIcon sx={{verticalAlign: "middle", mr: 1}} />
            Du {dateStart} {typeof dateEnd === "string" ? `jusqu'au ${dateEnd}`: "poste actuel"}
          </Typography>
        </Box>

        <Typography variant="subtitle2" sx={{mt: theme.spacing(1)}} color="textSecondary">          
          <LocationOnIcon sx={{verticalAlign: "middle"}} />
          {location}
        </Typography>

        <Typography sx={{mt: theme.spacing(2)}} variant="body1">{postName}</Typography>
    </Box>

    <Divider sx={{mb: 2, mt: 2}} />
    </>
  )
}