import { Grid, Paper} from "@mui/material"
import type { ProjectItemProps } from "../ProjectItem/ProjectItem"
import ProjectItem from "../ProjectItem/ProjectItem"

export interface ProjectsListProps {
  projects: ProjectItemProps[]
}

export default function ProjectsList({projects}: ProjectsListProps) {

  return (
    <Paper elevation={0} sx={{mt: 4}}>
        <Grid container spacing={2} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {projects.map((project, index: number) => (
            <Grid key={index} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
            <ProjectItem {...project} />
            </Grid>
          ))}
        </Grid>
    </Paper>
  )
}