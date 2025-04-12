import { Stack, Typography } from "@mui/material";

export interface TitleProps {

  title: string;
  subtitle: string;
  date?: [string, string];
}

export default function Title({subtitle, title, date}: TitleProps) {


  return (
  <Stack direction="column" spacing={1}>
    <Typography variant="subtitle1" component="h3">{title}</Typography>

    <Typography variant="subtitle2" component="h4">{subtitle}</Typography>
    
    {date && (
      <Typography variant="body2" color="textSecondary">{date[0]} - {date[1]}</Typography>
    )}
  </Stack>
  )
}