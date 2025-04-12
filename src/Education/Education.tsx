import { Button, Container, List, Typography } from "@mui/material";
import EducationItem from "./EducationItem";
import ModalContent from "./ModalContent/ModalContent";
import { useMemo, useState } from "react";
import DownloadCertificationButton from "./DownloadCertificationButton";
import { LONG_DESCRIBES } from "../constant";

export default function Eduction() {

  const [hasShowMore, setHasShowMore] = useState<boolean>(false)

  const modalContentList = useMemo(() => ({
    Openclassrooms: {
      Html_Css: <ModalContent longDescribe={LONG_DESCRIBES.openclassrooms.html_css} title="Openclassrooms" subtitle="HTML 5 & CSS 3" date={["Juin 2016", "Juillet 2016"]} />,
      Javascript: <ModalContent longDescribe={LONG_DESCRIBES.openclassrooms.javascript} title="Openclassrooms" subtitle="Javascript" date={["Octobre 2016", "Novembre 2016"]} />,
      Agile: <ModalContent longDescribe={LONG_DESCRIBES.openclassrooms.agile} title="Openclassrooms" subtitle="Méthode agile" date={["Février 2019", "Avril 2019"]} />,
      Php: <ModalContent longDescribe={LONG_DESCRIBES.openclassrooms.php} title="Openclassrooms" subtitle="PHP" date={["Avril 2017", "Juin 2017"]} />,
      React: <ModalContent longDescribe={LONG_DESCRIBES.openclassrooms.react} title="Openclassrooms" subtitle="React" date={["Octobre 2017", "Décembre 2017"]} />,
      Restful: <ModalContent longDescribe={LONG_DESCRIBES.openclassrooms.restful} title="Openclassrooms" subtitle="API's Restful" date={["Juillet 2017", "Juillet 2017"]} />
    },
    WebForce3: <ModalContent
      actions={(
        <>
          <DownloadCertificationButton type="dev" />
          <DownloadCertificationButton type="int" />
        </>
      )}
      title="WebForce 3"
      subtitle="Formation développement et intégration web"
      date={["Mars 2018", "Juillet 2018"]}
      longDescribe={LONG_DESCRIBES.webforce3} /> 
  }), [])

  const educationsList = useMemo(() => ([
    (keyValue: number) => <EducationItem key={keyValue} title="Développement & Intégration web" subtitle="WebForce 3 - 2018" contentModal={modalContentList.WebForce3} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web HTML 5 & CSS 3" subtitle="openclassrooms" contentModal={modalContentList.Openclassrooms.Html_Css} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web Javascript" subtitle="openclassrooms" contentModal={modalContentList.Openclassrooms.Javascript} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Conception web méthode agile" subtitle="openclassrooms" contentModal={modalContentList.Openclassrooms.Agile} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web PHP" subtitle="openclassrooms" contentModal={modalContentList.Openclassrooms.Php} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web React" subtitle="openclassrooms" contentModal={modalContentList.Openclassrooms.React} />,
    (keyValue: number) => <EducationItem key={keyValue} title="Développement web API RestFul" subtitle="openclassrooms" contentModal={modalContentList.Openclassrooms.Restful} />
  ]),  [modalContentList])

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