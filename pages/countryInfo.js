import { useRouter } from "next/router";

import countries from "../components/dataset_long.json";

import { useEffect, useState } from "react";
import styles from "../styles/countryInfo.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import ReactCountryFlag from "react-country-flag";

export default function CountryInfo(props) {
  const router = useRouter();
  const [state, setState] = useState([]);

  useEffect(() => {
    const countries = props.countries.countries;
    const index = router.asPath.indexOf("abbr") + 5;
    const abbr = router.asPath.slice(index);

    countries.map((val) => {
      if (val.abbr === (router.query.abbr || abbr)) {
        setState(val);
      }
    });
  }, [router, state]);

  return (
    <main className={styles.main}>
      <Grid
        justifyContent="center"
        alignSelf="center"
        sx={{ maxWidth: "1800px", alignSelf: "baseline" }}
        container
        spacing={2}
      >
        <Grid item container justifyContent="space-between" xs={10}>
          <Grid item xs={12}>
            <Card
              sx={{
                border: "0.4px solid lightgray",
                backgroundColor: "",
                padding: "36px",
              }}
            >
              <Grid container>
                <Grid
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  item
                  xs={12}
                  sm={12}
                  md={3}
                >
                  <ReactCountryFlag
                    style={{
                      width: "12rem",
                      height: "9rem",
                      minWidth: "180px",
                      minHeight: "135px",
                      border: "0.6px solid lightgray",
                    }}
                    svg
                    aria-label="country"
                    countryCode={state.abbr}
                  />
                </Grid>
                <Grid
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  item
                  xs={12}
                  sm={12}
                  md={9}
                  sx={{
                    paddingTop: "12px",
                  }}
                >
                  <Typography variant="h5">{state.name}</Typography>
                  <Typography variant="h6">
                    Conditions Screened: {state.CountTest}
                  </Typography>
                  <Typography variant="body">
                    If you are aware of any new policies or policy changes for
                    the country, please{" "}
                    <Link href="/shareData">Share Data</Link>.
                  </Typography>
                  <p></p>
                  <Typography variant="body">{state?.Detail}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      height: "80px",
                      alignItems: "self-end",
                    }}
                  >
                    <Button
                      sx={{ fontWeight: 600 }}
                      variant="outlined"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `${state.url}`; ///????
                      }}
                    >
                      Data Source
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={12} md={5.8}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  sx={{ minWidth: "300px" }}
                >
                  Endocrine Disorders
                </Typography>
                <List>
                  {state?.endocrine?.map((val, index) => {
                    return (
                      <ListItem key={index} divider={val === "" ? false : true}>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={12} md={5.8}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  component="div"
                  sx={{ minWidth: "300px" }}
                >
                  Amino Acidemias
                </Typography>
                <List>
                  {state?.aminoacid?.map((val, index) => {
                    return (
                      <ListItem key={index} divider={val === "" ? false : true}>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={12} md={5.8}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  component="div"
                  sx={{ minWidth: "300px" }}
                >
                  Organic Acidemias
                </Typography>
                <List>
                  {state?.organicAcid?.map((val, index) => {
                    return (
                      <ListItem key={index} divider={val === "" ? false : true}>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={12} md={5.8}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  component="div"
                  sx={{ minWidth: "400px" }}
                >
                  Fatty acid Oxidation Disorders
                </Typography>
                <List>
                  {state?.fattyAcid?.map((val, index) => {
                    return (
                      <ListItem key={index} divider={val === "" ? false : true}>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={12} md={5.8}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  component="div"
                  sx={{ minWidth: "300px" }}
                >
                  Miscellaneous Disorders
                </Typography>
                <List>
                  {state?.miscellaneous?.map((val, index) => {
                    return (
                      <ListItem key={index} divider={val === "" ? false : true}>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={12} md={5.8}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  sx={{ minWidth: "300px" }}
                >
                  Haemoglobinopathies
                </Typography>
                <List>
                  {state?.Hemo?.map((val, index) => {
                    return (
                      <ListItem key={index} divider={val === "" ? false : true}>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://raw.githubusercontent.com/eselimnl/data-nbsww/main/dataset_long.json"
  );
  const countries = await res.json();

  // will receive `posts` as a prop at build time
  return {
    props: {
      countries,
    },
  };
}
