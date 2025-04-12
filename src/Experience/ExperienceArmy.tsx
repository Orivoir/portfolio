import { Typography } from "@mui/material";
import { useMemo } from "react";
import ExperienceItem from "./ExperienceItem";
import { ImageListProps } from "../ImageList";


export default function ExperienceArmy() {

  const images = useMemo(() => import.meta.glob('/src/assets/experiences/army/*.jpg', { eager: true, as: 'url' }), [])

  const armyImagesPath = useMemo(() => (
    Object
    .entries(images)
    
    // Tri des fichiers par numéro (extrait depuis le nom de fichier)
    .sort(([current], [next]) => {
      const getNum = (fileName: string) =>
        parseInt(fileName.match(/army-(\d+)\.jpg$/)?.[1] || '0');
      
      return getNum(current) - getNum(next)
    })
    .map(([, url]) => url)
  ), [images])

  const armyExperienceDescribe = useMemo(() => (
    <>
    {/* introduction */}
    <Typography sx={{lineHeight: "1.45rem", mb: 2}}>
      Au cours de mes deux années au sein de l'Armée de Terre, au 40e Régiment de Transmissions, j'ai évolué en tant que spécialiste des systèmes d'information et de communication (SIC).
      Cette période a été marquée par des expériences formatrices, tant sur le plan technique qu'humain.
    </Typography>

    {/* FGI / FTS */}
    <Typography sx={{lineHeight: "1.45rem", mb: 2}}>
      Ma formation initiale a débuté par la Formation Générale Initiale (FGI) à Dieuze, où j'ai acquis les bases du métier de soldat.
      Elle s'est poursuivie par la Formation de Spécialité (FTS) à Hettange-Grande, me permettant de maîtriser les outils et protocoles spécifiques aux SIC.
    </Typography>
    
    {/* Loyal Leda */}
    <Typography sx={{lineHeight: "1.45rem"}}>
      L’un des temps forts de mon engagement fut ma participation à l’exercice OTAN Loyal Leda 2024, de janvier à mars, réalisé en France.
      Intégré au CRR-Fr, j’ai assuré l’installation du matériel informatique, la configuration des logiciels et l’assistance aux utilisateurs dans un contexte simulant des opérations de haute intensité.
      Cette mission m’a permis de renforcer mes compétences techniques et de mettre en pratique la coordination au sein d’une structure multinationale.
    </Typography>
    </>
  ), [])

  const armyImages: ImageListProps = useMemo(() => ({
    images: [
      {title: "Valdahon - Groupe de combat (2024)", subtitle: "Entrainement combat", url: armyImagesPath[0]},
      {title: "Valdahon - position de tir (2024)", subtitle: "Entrainelent secours combat", url: armyImagesPath[1]},
      {title: "FGI - Retex mission (2023)", subtitle: "Récapitulatif de mission combat", url: armyImagesPath[2]},
      {title: "FGI - Cérémonie (2023)", subtitle: "Flambeau du soldat inconnue (Paris)", url: armyImagesPath[3]},
      {title: "FGI - Méthode Naturelle (2023)", subtitle: "Agérissement en groupe", url: armyImagesPath[4]},
      {title: "FGI - Méthode Naturelle (2023)", subtitle: "Agérissement et ésprit d'équipe", url: armyImagesPath[5]},
      {title: "FTS - Entrainement combat (2023)", subtitle: "Manipulation du HK416", url: armyImagesPath[6]},
      {title: "FGI - Cérémonie (2023)", subtitle: "Fin de formation", url: armyImagesPath[7]},
      {title: "FGI - Fin de cérémonie (2023)", subtitle: "Fin de cérémonie de fin de formation", url: armyImagesPath[8]},
      {title: "FGI - Méthode Naturelle (2023)", subtitle: "Agérissement groupe et individuel", url: armyImagesPath[9]},
      {title: "FGI - Cérémonie", subtitle: "Remise des armes et serment d'engagement", url: armyImagesPath[10]},
      {title: "FGI - Fin d'entrainement", subtitle: "Fin d'entrainement du groupe de combat", url: armyImagesPath[11]},
      {title: "FGI - Le premier jour (2023)", subtitle: "Le 6 Fèvrier 2023", url: armyImagesPath[12]},
    ],
    cols: 4,
    rowHeight: 450,
    size: {width: "100%"}
  }),  [armyImagesPath])


  return (
    <ExperienceItem
      images={armyImages}
      longDescribe={armyExperienceDescribe}
      header={{
        postName: "Système d'information et de communication (SIC)",
        location: "Thionville",
        dateStart: "06/02/2023",
        dateEnd: "06/02/2025",
        company: "Armée de terre"
      }} />
  )
}