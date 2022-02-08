import { Grid, Typography, Link } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { margin } from "@mui/system";

export default function About() {
  return (
    <main className={styles.container}>
      <Grid display="flex" justifyContent="center">
        <Image
          className={styles.hey}
          width={"500vw"}
          height={"300vw"}
          src="/babyleg.jpeg"
        />
      </Grid>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="h5"
      >
        What is NBSww?
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="body"
      >
        <Link href="https://nbsww.org">NBSww</Link> visualizes the current
        status of newborn screening programs worldwide. The goal of the website
        is to help researchers to understand and take an action to improve
        healthcare systems by monitoring the variety of newborn screening
        programs around the world.
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="h5"
      >
        On NBSww you can find
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="body"
      >
        - On the Home Page, an interactive choropleth world map visualizes
        overall screening status and a functional table that provides finding a
        list of countries for a specific condition or summary data country of
        interest.
        <br></br>- The nationwide newborn screening program of a country in its
        own page.
        <br></br>- Summary statistics (still under development status)
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="h5"
      >
        Our partners
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="body"
      >
        NBSww is developed by a partnership with{" "}
        <Link href="https://istanbultip.istanbul.edu.tr/en/_">
          Istanbul University Faculty of Medicine
        </Link>{" "}
        and{" "}
        <Link href="https://cocuksagligi.istanbul.edu.tr/en/_">
          Istanbul University Institute of Child Health
        </Link>
        . This project is granted by the Scientific and Technological Research
        Council of Turkey{" "}
        <Link href="https://www.tubitak.gov.tr/en">(TÜBİTAK)</Link>.
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="h5"
      >
        Contact us
      </Typography>
      <Typography
        sx={{ paddingLeft: "20px", width: "100%", margin: "10px" }}
        variant="body"
      >
        We appreciate any feedback to improve our website. Please reach us at:{" "}
        <Link href="mailto:nbs2ww@gmail.com">nbs2ww@gmail.com</Link>
      </Typography>
    </main>
  );
}
