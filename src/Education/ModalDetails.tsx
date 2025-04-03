import { JSX } from "@emotion/react/jsx-runtime";
import { Box, Modal, useTheme } from "@mui/material"

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
          borderRadius: theme.shape.borderRadius,
          pt: 2, pb: 2, pr: 8, pl: 8
          }}>{children}</Box>
    </Modal>
  )
}