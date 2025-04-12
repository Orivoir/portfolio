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

export const LONG_DESCRIBES = {
  webforce3: `J’ai suivi en 2018 une formation en Développement et Intégration Web chez WebForce3. Cette formation intensive m’a permis d’acquérir des bases solides en HTML, CSS et JavaScript, que j’ai rapidement mises en pratique à travers des projets concrets. L’apprentissage de React a marqué un vrai tournant dans ma manière de concevoir des interfaces dynamiques et modulaires, en m’ouvrant à la logique des composants et au travail avec des états et des props.
      Côté serveur, nous avons exploré PHP, avec une transition progressive vers Symfony 4. Ce framework m’a permis de structurer mes applications, de comprendre l’architecture MVC, et de gagner en rigueur dans le développement backend. L’intégration de bases de données avec MySQL et la configuration d’un environnement de serveur local avec Apache étaient également au programme. L’ensemble m’a donné une bonne vision du cycle complet d’une application web, du front au back.
      Cette formation m’a non seulement permis de développer mes compétences techniques, mais aussi de gagner en autonomie, en rigueur, et en capacité à travailler en équipe sur un projet. Elle a été un vrai tremplin pour la suite de mon parcours dans le développement web.`,
  openclassrooms: {
    html_css: `Initiation aux bases du développement web : structure sémantique d'une page HTML, mise en forme avec CSS3, introduction au responsive design et au positionnement via Flexbox.
        Réalisation de pages web simples à travers des exercices pratiques et projets guidés.
        Cette formation m’a permis de poser des fondations solides pour la suite de mon parcours, notamment en UI/UX, où j'ai approfondi l'utilisation d’animations et de transitions CSS modernes pour améliorer l’interactivité et l’expérience utilisateur.`,
    javascript:  `Apprentissage des fondamentaux du langage JavaScript : syntaxe de base, manipulation du DOM, gestion des événements, structures conditionnelles et fonctions.
    Mise en pratique à travers des mini-projets interactifs, permettant d’ajouter de la logique et du dynamisme aux pages web.
    Cette formation m’a permis de comprendre la programmation côté client, et de poser les bases nécessaires pour aller plus loin vers des frameworks comme React.
    Elle m’a aussi sensibilisé à l’importance de l’expérience utilisateur, que j’ai continué à enrichir avec des interactions modernes et des animations JavaScript ciblées.`,
    agile: `Découverte des grands principes de l’agilité à travers les frameworks Scrum et Kanban : gestion itérative de projet, rôles clés (Product Owner, Scrum Master, Équipe), et rituels agiles (daily, sprint planning, rétrospective).
    La formation m’a permis de comprendre l’importance de la collaboration, de l’adaptabilité et de la communication continue dans un environnement projet.
    J’ai pu intégrer cette approche dans mes projets personnels en adoptant une gestion par tâches, des cycles courts et une amélioration continue, renforçant ainsi mon efficacité et ma capacité à itérer rapidement.`,
    php: `Initiation à la programmation côté serveur avec PHP : syntaxe de base, traitement des formulaires, variables superglobales, conditions, boucles et fonctions.
    La formation couvrait également la génération de contenu dynamique, la gestion des fichiers et les bases de l’interaction avec une base de données (MySQL).
    Cet apprentissage m’a permis de comprendre les fondements du développement back-end et d’écrire mes premiers scripts dynamiques, ouvrant la voie à des projets complets combinant front et back.`,
    react: `Découverte de la bibliothèque JavaScript React : création de composants, gestion des props et états (useState), rendu conditionnel, boucles de rendu, et événements.
    La formation introduisait aussi le système de routing avec React Router et les bases du "thinking in components".
    Grâce à cette approche modulaire, j’ai appris à structurer mes interfaces de manière claire et évolutive, tout en améliorant l’expérience utilisateur avec des interactions dynamiques et une gestion efficace du DOM virtuel.`,
    restful: `Formation axée sur la compréhension du fonctionnement des API REST : principes fondamentaux (requêtes HTTP, verbes, stateless, routes), formats de données (JSON), et communication entre client et serveur.
    J’ai appris à consommer des API tierces via fetch en JavaScript et à structurer mes propres routes côté back-end.
    Cette compétence a été essentielle dans mes projets, me permettant de connecter des interfaces front-end à des services distants de manière fluide, tout en respectant les conventions REST.`
  }
}