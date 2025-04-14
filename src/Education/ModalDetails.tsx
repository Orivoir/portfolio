import { JSX } from "@emotion/react/jsx-runtime";
import { Box, IconButton, Modal, useTheme } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export interface ModalDetails {
  isOpen: boolean
  onClose: () => void;
  children: JSX.Element | string | null | undefined | number
}

export default function ModalDetails({isOpen, onClose, children}: ModalDetails) {

  const theme = useTheme()

  return (
    <Modal
        keepMounted
        open={isOpen}
        onClose={onClose}
        aria-describedby="Informations détaillé de formation"
      >
        <Box sx={{
          bgcolor: "background.paper",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: 'translate(-50%, -50%)',
          borderRadius: theme.shape.borderRadius / 4,
          pt: 2, pb: 2, pr: 8, pl: 8
          }}>
          <Box sx={{display: "flex", justifyContent: "flex-end"}}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
            {children}
          </Box>
    </Modal>
  )
}