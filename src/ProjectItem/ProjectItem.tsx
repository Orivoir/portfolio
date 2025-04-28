import { Card, CardActions, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import Actions from './Actions';

export interface ProjectItemProps {
  media?: string;
  title?: string;
  shortDescription?: string;
  githubUrl?: string;
  figmaUrl?: string;
  isDevelopMode?: boolean;
  projectUrl?: string;
}

export default function ProjectItem({
  media,
  title,
  shortDescription,
  githubUrl,
  figmaUrl,
  isDevelopMode,
  projectUrl
}: ProjectItemProps) {

  // factory data
  const mediaItem = media || "https://placehold.co/600x400"
  const titleItem = title || "Lorem Ipsum"
  const shortDescriptionItem = shortDescription || "Lorem ipsum, dolor sit amet consectum amat, victoria sit couram."

  return (
    <Card sx={{minWidth: 200, height: 385, pb: 2}}>
      <CardActionArea href={title ? `/portfolio/#/project/${title}`: "#"}>
      <Box sx={{position: 'relative', paddingTop: '56.25%' /* 16:9 */ }}>
        <CardMedia
          component="img"
          alt="Titre image"
          image={mediaItem}
          title={titleItem}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '90%',
            height: '90%',
            objectFit: 'contain',
            transform: "translateX(5%) translateY(5%)"
          }}
        />
      </Box>
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant='subtitle1'>{titleItem}</Typography>
        <Typography variant='body2' color="textSecondary">{shortDescriptionItem}</Typography>
      </CardContent>

      <CardActions>
        <Actions projectUrl={projectUrl} isDevelopMode={isDevelopMode} figmaUrl={figmaUrl} githubUrl={githubUrl} />
      </CardActions>

    </Card>
  )
}