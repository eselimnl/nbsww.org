import styles from "../styles/Footer.module.css";

import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <footer className={styles.container}>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Typography sx={{ fontSize: "12px" }} variant="body">
            All the material produced by NBSww, including interactive
            visualizations and code, are completely open access under the{" "}
            <b>Creative Common Licence</b>. You have the permission to use,
            distribute, and reproduce these in any medium, provided the source
            and authors are credited.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
