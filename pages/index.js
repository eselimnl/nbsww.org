import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";
import { useState } from "react";
import MapChart from "../components/MapChart";
import { Typography } from "@mui/material";

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <main className={styles.container}>
      <Typography sx={{ paddingLeft: "20px", width: "100%" }} variant="h4">
        Newborn Screening Worldwide
      </Typography>
      <Typography sx={{ paddingLeft: "20px", width: "100%" }} variant="body">
        This interactive map shows the current situation of newborn screening
        programs all over the world.
      </Typography>
      <Typography sx={{ paddingLeft: "20px", width: "100%" }} variant="body">
        Click on the country to see its newborn screening program.
      </Typography>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip border={true}>{content}</ReactTooltip>
    </main>
  );
}
