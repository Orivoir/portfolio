import { Box, Dialog, DialogContent, IconButton, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

export default function Image({src, legend}: {src: string, legend: string}) {


  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)

  const onOpenDialog = () => setIsOpenDialog(true)

  return (
    <Box>
    
      <Box>
        <Typography variant="body1" color="textSecondary">{legend}</Typography>
        <Tooltip title="agrandir">
          <Box onClick={onOpenDialog} component="img" src={src} sx={{
            maxHeight: "400px",
            height: "auto",
            width: "auto",
            maxWidth: "100%",
            cursor: "pointer"
          }} />
        </Tooltip>
      </Box>

          
      <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)} maxWidth="lg" fullWidth>
        <Box sx={{display: "flex", justifyContent: "flex-end", mt: 1, mr: 1}}>
          <IconButton onClick={() => setIsOpenDialog(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              transition: "transform 0.3s ease", // Effet de transition
            }}>

            <Box
              component="img"
              src={src}
              alt="Agrandissement de l'image"
              sx={{
                width: "auto",
                height: "auto",
                maxWidth: "90%", // Limite la taille de l'image dans le modal
                maxHeight: "80vh", // Limite la hauteur pour ne pas trop agrandir l'image
                transition: "transform 0.3s ease-in-out", // Transition fluide
              }}
            />
          </DialogContent>
      </Dialog>
    </Box>
  )

}