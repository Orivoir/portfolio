import { Box, Container, ImageList, ImageListItem, ImageListItemBar, Modal, Stack, Typography, useTheme } from "@mui/material"

export interface ModalWebForce3Props {
  isOpen: boolean
  onClose: () => void
}

export default function ModalWebForce3({isOpen, onClose}: ModalWebForce3Props) {

  const theme = useTheme()

  return (
    <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="Formation Webforce 3"
        aria-describedby="Informations détaillé de la formation WebForce 3"
      >
        <Box sx={{
          bgcolor: "background.paper", position: "absolute", top: "50%", left: "50%",  transform: 'translate(-50%, -50%)',
          borderRadius: theme.shape.borderRadius,
          pt: 4, pb: 4, pr: 4, pl: 4
          }}>
          
          <Stack direction="column" spacing={1}>
            <Typography variant="subtitle1" component="h3">
              WebForce 3
            </Typography>

            <Typography variant="subtitle2" component="h4">
              Formation développement et intégration web
            </Typography>

            <Typography variant="body2" color="textSecondary">Mars 2018 - Juillet 2018</Typography>
          </Stack>

          <Box sx={{mt: 4}}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt feugiat nibh, nec venenatis eros. Pellentesque volutpat enim non pulvinar egestas. Maecenas pellentesque arcu nulla, vel pellentesque leo rhoncus sed. Proin in dui ac tellus dictum commodo id nec sapien. In non gravida quam, in ullamcorper erat. Proin lacinia dictum nulla non aliquam. Nullam congue justo turpis, non convallis urna euismod eu. Aliquam nisi neque, auctor quis enim a, laoreet consectetur risus. Quisque a placerat ante. Proin nulla mauris, porta vitae magna eget, lacinia lobortis justo. Ut malesuada nunc in turpis efficitur elementum. Etiam vehicula erat odio, tristique pretium ante euismod eget. Vestibulum ultrices gravida consectetur. Donec ullamcorper ultrices ullamcorper. Nam elementum est eget molestie posuere.
            </Typography>

            <ImageList sx={{width: 600, height: 450}} cols={3} rowHeight={195}>
              {[1,2,3,4,5,6,7,8].map((index) => (
                <ImageListItem key={index}>
                  <img src="https://placehold.co/600x400" loading="lazy" />
                  <ImageListItemBar
                    title="Lorem ipsum"
                    subtitle="dolor sit amet" />
                </ImageListItem>
              ))}
            </ImageList>

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt feugiat nibh, nec venenatis eros. Pellentesque volutpat enim non pulvinar egestas.
            </Typography>
          </Box>
        </Box>
      </Modal>

  )
}