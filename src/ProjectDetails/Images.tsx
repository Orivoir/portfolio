import bookiDesktop from "./../assets/projects/booki/booki-desktop.png"
import bookiTablette from "./../assets/projects/booki/booki-tablette.png"
import bookiMobile from "./../assets/projects/booki/booki-mobile.png"

import kasaMobile from "./../assets/projects/kasa/kasa_mobile.png"
import kasaAbout from "./../assets/projects/kasa/kasa_about.png"
import kasaDesktop from "./../assets/projects/kasa/kasa_desktop.png"

import Image from "./Image"
import { Box } from "@mui/material"
import { useMemo } from "react"

export default function Images({name}: {name: string}) {

  const sources = useMemo<{legend: string; src: string}[]>(() => (
    name === "booki" ? [
      {
        legend: "version desktop (large)",
        src: bookiDesktop
      }, {
        legend: "version landscop (tablette)",
        src: bookiTablette
      },
      {
        legend: "version mobile",
        src: bookiMobile
      }
    ]: name === "kasa" ? [
      {
        legend: "",
        src: kasaDesktop,
      },
      {
        legend: "",
        src: kasaMobile 
      },
      {
        legend: "",
        src: kasaAbout
      }
    ]: []
  ), [name])  

  return (
    <Box sx={{
      display: "flex",
      gap: 2,
      flexWrap: "wrap"
    }}>
      {sources.map((props, index) => (
        <Image key={index} {...props} />
      ))}
    </Box>
  )
}