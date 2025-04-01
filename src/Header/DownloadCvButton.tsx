import DownloadIcon from '@mui/icons-material/Download';
import { Alert, Snackbar, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function DownloadCvButton() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isOpenFallback, setIsOpenFallback] = useState<boolean>(false)

  const onDownload = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsOpenFallback(true)
    }, 750)

    setTimeout(() => {
      setIsLoading(false)
    }, 3_000)
  }

  const onCloseFallback = () => {
    setIsOpenFallback(false)
  }

  const theme = useTheme()

  return (
    <>
    <Button
      variant='outlined'
      loadingPosition='end'
      href='#'
      download
      fullWidth
      loading={isLoading}
      onClick={onDownload}
      startIcon={<DownloadIcon />}>
        Télécharger cv
    </Button>

    <Snackbar
      open={isOpenFallback}
      autoHideDuration={5_000}
      onClose={onCloseFallback}
      sx={{backgroundColor: theme.palette.background.paper, borderRadius: theme.shape.borderRadius, outline: "none"}}>

      <Alert onClose={onCloseFallback} severity='success' variant='outlined' sx={{width: "100%", border: "none", outline: "none"}}>
        CV Télécharger avec succés
      </Alert>
    </Snackbar>
    </>
  )

}