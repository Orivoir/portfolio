import GitHubIcon from '@mui/icons-material/GitHub';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, CardActionArea } from '@mui/material';

export interface ProjectItemProps {
  media?: string;
  title?: string;
  shortDescription?: string;
}

export default function ProjectItem({media, title, shortDescription}: ProjectItemProps) {

  const mediaItem = media || "https://placehold.co/600x400"
  const titleItem = title || "Lorem Ipsum"
  const shortDescriptionItem = shortDescription || "Lorem ipsum, dolor sit amet consectum amat, victoria sit couram."

  return (
    <Card sx={{minWidth: 200}}>
      <CardActionArea>
        <CardMedia image={mediaItem} title={titleItem} sx={{height: 180}} />
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant='subtitle1'>{titleItem}</Typography>
        <Typography variant='body2' color="textSecondary">{shortDescriptionItem}</Typography>
      </CardContent>

      <CardActions>
        <IconButton size="large">
          <GitHubIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
}