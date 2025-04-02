import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DownloadCertificationButton from "./DownloadCertificationButton";
import { useState } from "react";
import ModalWebForce3 from "./ModalWebForce3";


export default function EducationWebforce3() {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const onOpenModal = () => setIsOpenModal(true)

  return (
    <>
    <ListItem>
    <ListItemAvatar>
      <Tooltip title="infos sur la formation">
        <Avatar>
          <IconButton onClick={onOpenModal}>
            <SchoolIcon />
          </IconButton>
        </Avatar>
      </Tooltip>
    </ListItemAvatar>

    <ListItemText primary="Développement & Intégration web" secondary={
      <>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2" color="textSecondary">WebForce 3 - 2018</Typography>
          <DownloadCertificationButton />
        </Stack>
      </>
    } />
  </ListItem>

  <ModalWebForce3 isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
  </>
  )
}