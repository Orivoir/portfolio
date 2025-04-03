import { Box, Stack, Typography} from "@mui/material"
import Title from "./Title"
import {default as ModalImageList} from "./ImageList"
import DownloadCertificationButton from "../DownloadCertificationButton"

export default function ModalWebForce3() {

  return (
    <>
      <Title />

      {/* @TODO: placeholder content */}
      <Box sx={{mt: 4}}>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt feugiat nibh, nec venenatis eros. Pellentesque volutpat enim non pulvinar egestas. Maecenas pellentesque arcu nulla, vel pellentesque leo rhoncus sed. Proin in dui ac tellus dictum commodo id nec sapien. In non gravida quam, in ullamcorper erat. Proin lacinia dictum nulla non aliquam. Nullam congue justo turpis, non convallis urna euismod eu. Aliquam nisi neque, auctor quis enim a, laoreet consectetur risus. Quisque a placerat ante. Proin nulla mauris, porta vitae magna eget, lacinia lobortis justo. Ut malesuada nunc in turpis efficitur elementum. Etiam vehicula erat odio, tristique pretium ante euismod eget. Vestibulum ultrices gravida consectetur. Donec ullamcorper ultrices ullamcorper. Nam elementum est eget molestie posuere.
        </Typography>

        <ModalImageList
          images={
            [
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"},
              {url: "https://placehold.co/600x400", title: "lorem ipsum", subtitle: "dolor sit amet"}
            ]
          } />

        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt feugiat nibh, nec venenatis eros. Pellentesque volutpat enim non pulvinar egestas.
        </Typography>

        <Stack direction="row" spacing={4} sx={{mt: 4}}>
          <DownloadCertificationButton type="dev" />
          <DownloadCertificationButton type="int" />
        </Stack>
      </Box>
    </>
  )
}