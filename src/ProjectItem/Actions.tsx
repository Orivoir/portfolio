import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import BrushIcon from '@mui/icons-material/Brush';
import HandymanIcon from '@mui/icons-material/Handyman';
import WebIcon from '@mui/icons-material/Web';

export interface ActionsInterface {
  githubUrl?: string;
  figmaUrl?: string;
  isDevelopMode?: boolean;
  projectUrl?: string;
}

export default function Actions({figmaUrl,githubUrl, isDevelopMode, projectUrl}: ActionsInterface) {

  return (
    <>    
    <Tooltip title="voir le github du projet">
      <IconButton href={githubUrl || "#"} disabled={!githubUrl} target='_blank' size="large">
        <GitHubIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="voir le design du projet (figma)">
      <IconButton href={figmaUrl || "#"} disabled={!figmaUrl} target='_blank' size="large">
        <BrushIcon />
      </IconButton>
    </Tooltip>

    {projectUrl && (
      <Tooltip title="voir le projet web">
        <IconButton href={projectUrl}>
          <WebIcon />
        </IconButton>
      </Tooltip>
    )}

    {isDevelopMode && (
      <Tooltip title="projet en cours de développement">
        <HandymanIcon />
      </Tooltip>
    )}
    </>
  )
}