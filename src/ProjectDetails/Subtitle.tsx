import { Typography } from "@mui/material";
import { useMemo } from "react";

export default function Subtitle({name}: {name: string}) {

  const subtitlesTextList = useMemo(() => ({
    "booki": "Booki est une plateforme qui permet aux utilisateurs de rechercher et de réserver des hébergements et des activités touristiques dans différentes villes.",
    "kasa": "Kasa est une application web permettant de trouver, réserver et consulter des logements entre particuliers dans différentes régions.",
    "chessboard.js": "Chessboard.js est une bibliothèque JavaScript qui permet d'intégrer un échiquier interactif et personnalisable dans des applications web."
  }), [])

  const getSubtitleText = () => {

    switch(name) {
      case "booki":
        return subtitlesTextList.booki
      case "kasa":
        return subtitlesTextList.kasa
      case "chessboard.js":
        return subtitlesTextList["chessboard.js"]
      default:
        return "Oops ! Not project found for: " + name
    }
  }

  return (
    <Typography variant="subtitle1" color="textSecondary">{getSubtitleText()}</Typography>
  )
}