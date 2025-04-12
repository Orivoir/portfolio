import { Card, CardActions, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import Actions from './Actions';

export interface ProjectItemProps {
  media?: string;
  title?: string;
  shortDescription?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export default function ProjectItem({
  media,
  title,
  shortDescription,
  githubUrl,
  figmaUrl
}: ProjectItemProps) {

  // factory data
  const mediaItem = media || "https://placehold.co/600x400"
  const titleItem = title || "Lorem Ipsum"
  const shortDescriptionItem = shortDescription || "Lorem ipsum, dolor sit amet consectum amat, victoria sit couram."

  return (
    <Card sx={{minWidth: 200}}>
      <CardActionArea>
      <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 */ }}>
        <CardMedia
          component="img"
          alt="Titre image"
          image={mediaItem}
          title={titleItem}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant='subtitle1'>{titleItem}</Typography>
        <Typography variant='body2' color="textSecondary">{shortDescriptionItem}</Typography>
      </CardContent>

      <CardActions>
        <Actions figmaUrl={figmaUrl} githubUrl={githubUrl} />
      </CardActions>

    </Card>
  )
}