import DownloadIcon from '@mui/icons-material/Download';
import { Alert, Fab, Snackbar, useMediaQuery, useTheme } from '@mui/material';
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
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <>
    {matches ? (
    <Button
      variant='contained'
      loadingPosition='end'
      href='/portfolio/Samuel-GABORIEAU_DEV_FULLSTACK_2025.pdf'
      download
      fullWidth
      loading={isLoading}
      onClick={onDownload}
      startIcon={<DownloadIcon />}>
        Télécharger cv
    </Button>
    ): (
      <Fab size="small" color="primary" variant='extended' onClick={onDownload}>
        <DownloadIcon /> CV
      </Fab>
    )}

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