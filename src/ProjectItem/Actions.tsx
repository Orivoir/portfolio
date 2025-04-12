import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import BrushIcon from '@mui/icons-material/Brush';

export interface ActionsInterface {
  githubUrl?: string;
  figmaUrl?: string;
}

export default function Actions({figmaUrl,githubUrl}: ActionsInterface) {

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
    </>
  )
}