/**
 * @description This file exports constant used by React components
 * @see eslint `react-refresh/only-export-component`
 */

import type { ProjectItemProps } from "./ProjectItem/ProjectItem"

export const DEFAULT_SIZE = {width: 600, height: 450}
export const DEFAULT_COLS = 3
export const DEFAULT_ROW_HEIGHT = 195

import bookiLogo from "./assets/projects/booki/Booki@3x.png"
import kasaLogo from "./assets/projects/kasa/logo.png"
import chessboardJsLogo from "./assets/projects/chessboard.js/wp.png"

export const projects: ProjectItemProps[] = [
  {
    title: "booki",
    shortDescription: "Booki est un site de réservation et d'hébergement.",
    githubUrl: "https://github.com/orivoir/booki",
    figmaUrl: "https://www.figma.com/design/ojQQgF7IwYCocKllDzWgf6/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)-(Copy)?node-id=3-0&node-type=canvas&t=Dlox5NieqdvXJcTs-0",
    media: bookiLogo,
  },
  {
    title: "kasa",
    shortDescription: "Kasa est un site d'annonces de logements entre particulier",
    githubUrl: "https://github.com/orivoir/kasa",
    figmaUrl: "https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1",
    media: kasaLogo
  },
  {
    title: "chessboard.js",
    shortDescription: "chessboard.js est une librairie qui fournit l'interface d'un plateau d'échecs",
    githubUrl: "https://github.com/Orivoir/chessboard.js",
    media: chessboardJsLogo
  }
]  