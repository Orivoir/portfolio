import { Box, Button, Container, Divider, IconButton, Tooltip, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import Subtitle from "./Subtitle"
import Images from "./Images"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

export default function ProjectDetails() {

  const {name} = useParams<{name: string}>()

  const projectUrl = /^(booki)|(kasa)$/.test(name || "") ? `https://orivoir.github.io/${name}`: null

  return (
    <Container maxWidth="xl" sx={{mt: 2}}>
      <Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center"
        }}>
          <Tooltip title="retour à l'accueil">
            <IconButton href="/portfolio/">
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>

            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1}}>
              <Typography variant="h1" sx={{textTransform: "capitalize"}}>{name}</Typography>
              {projectUrl && (
                <Tooltip title="voir le rendu du projet">
                  <IconButton href={projectUrl}>
                    <WebIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
        </Box>
        <Subtitle name={name || ""} />

        <Divider sx={{mt: 2, mb: 4}} />

        <Images name={name || ""} />

        <Divider sx={{mt: 2, mb: 4}} />

        <Box sx={{mb: 2, display: "flex", flexDirection: "row", alignItems: "center", gap: 2}}>
          <Tooltip title="voir le github du projet">
            <IconButton target="_blank" href={`https://github.com/orivoir/${name}`}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          {projectUrl && (
            <Button variant="outlined" href={projectUrl}>
              voir le rendu du projet
            </Button>
          )}
        </Box>

      </Box>
    </Container>
  )
}