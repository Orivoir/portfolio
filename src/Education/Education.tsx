import { Button, Container, Divider, List, Typography } from "@mui/material";
import EducationItem from "./EducationItem";
import {default as ContentModalWebForce3} from "./ModalWebForce3/ModalWebForce3";
import { useMemo, useState } from "react";

export default function Eduction() {


  const [hasShowMore, setHasShowMore] = useState<boolean>(false)

  const educationsList = useMemo(() => ([
    (keyValue: number) => <EducationItem key={keyValue} title="Développement & Intégration web" subtitle="WebForce 3 - 2018" contentModal={<ContentModalWebForce3 />} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web HTML 5 & CSS 3" subtitle="openclassrooms" contentModal={<>Hello world !</>} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web Javascript" subtitle="openclassrooms" contentModal={<>Hello world !</>} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Conception web méthode agile" subtitle="openclassrooms" contentModal={<>Hello world !</>} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web PHP" subtitle="openclassrooms" contentModal={<>Hello world !</>} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web React" subtitle="openclassrooms" contentModal={<>Hello world !</>} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web API RestFull" subtitle="openclassrooms" contentModal={<>Hello world !</>} />
  ]),  [])

  const defaultShow = 3

  return (
    <Container sx={{mt: 4, mb: 4}}>
      <Typography variant="h3" component="h3">Education</Typography>

      <List sx={{width: "100%"}}>

        {educationsList.slice(0, !hasShowMore ? defaultShow: Infinity).map((createEducationItem, index) => (
          createEducationItem(index)
        ))}

      </List>
      

      <Button variant="text" onClick={() => setHasShowMore(currentValue => !currentValue)}>
        voir {!hasShowMore ? "plus": "moins"}  {!hasShowMore ? `(+${educationsList.length - defaultShow})`: ""}
      </Button>
    </Container>
  )
}