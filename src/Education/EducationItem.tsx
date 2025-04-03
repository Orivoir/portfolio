import { Avatar, Button, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { JSX, useState } from "react";
import ModalDetails from "./ModalDetails";

export interface EducationItemProps {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  contentModal: JSX.Element;
}

export default function EducationItem({title, subtitle, contentModal}: EducationItemProps) {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const onOpenModal = () => setIsOpenModal(true)

  return (
    <>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <SchoolIcon />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={(
        <Stack direction="column">
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" color="textSecondary">{subtitle}</Typography>
        </Stack>
      )} secondary={
        <Button sx={{mt: 2}} onClick={onOpenModal}>voir plus</Button>
      } />
  </ListItem>

  <ModalDetails isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>{contentModal}</ModalDetails>
  </>
  )
}