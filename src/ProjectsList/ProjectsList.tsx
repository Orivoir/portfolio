import { Box, Grid, Typography} from "@mui/material"
import type { ProjectItemProps } from "../ProjectItem/ProjectItem"
import ProjectItem from "../ProjectItem/ProjectItem"

export interface ProjectsListProps {
  projects: ProjectItemProps[]
}

export default function ProjectsList({projects}: ProjectsListProps) {

  return (
    <Box sx={{mt: 4}}>

        <Typography sx={{textAlign: "center", mb: 2}} variant="h3" component="h3">Mes projets récents</Typography>
        <Grid container spacing={2} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
          {projects.map((project, index: number) => (
            <Grid key={index} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
            <ProjectItem {...project} />
            </Grid>
          ))}
        </Grid>
    </Box>
  )
}