import { JSX } from "@emotion/react/jsx-runtime";
import { Box, IconButton, Modal, SxProps, useMediaQuery, useTheme } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export interface ModalDetails {
  isOpen: boolean
  onClose: () => void;
  children: JSX.Element | string | null | undefined | number
}

export default function ModalDetails({isOpen, onClose, children}: ModalDetails) {

  const theme = useTheme()

  const matchesDownMd = useMediaQuery(theme.breakpoints.down("md"))

  const styles: SxProps<typeof theme> = {
    bgcolor: "background.paper",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    borderRadius: theme.shape.borderRadius / 4,
    pt: 2, pb: 2, pr: 8, pl: 8,
  }

  if(matchesDownMd) {

    styles.borderRadius = 0
    styles.width = "100%"
    styles.height = "100%"
    styles.maxHeight = "100%"
  }

  return (
    <Modal
        keepMounted
        open={isOpen}
        onClose={onClose}
        aria-describedby="Informations détaillé de formation"
      >
        <Box sx={{...styles}}>
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