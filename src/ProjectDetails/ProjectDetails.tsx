import { Box, Container, Divider, IconButton, Tooltip, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import Subtitle from "./Subtitle"
import Images from "./Images"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function ProjectDetails() {

  const {name} = useParams<{name: string}>()

  return (
    <Container maxWidth="xl" sx={{mt: 2}}>
      <Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center"
        }}>
          <IconButton href="/portfolio/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h1" sx={{textTransform: "capitalize"}}>{name}</Typography>
        </Box>
        <Subtitle name={name || ""} />

        <Divider sx={{mt: 2, mb: 4}} />

        <Images name={name || ""} />

        <Divider sx={{mt: 2, mb: 4}} />

        <Box>
          <Tooltip title="voir le github du projet">
            <IconButton target="_blank" href={`https://github.com/orivoir/${name}`}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>

      </Box>
    </Container>
  )
}