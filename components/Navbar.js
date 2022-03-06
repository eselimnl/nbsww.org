import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import {
  TextField,
  InputAdornment,
  Button,
  Autocomplete,
  Input,
  Grid,
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useRouter } from "next/router";
import Image from "next/image";
import image from "../public/LOGO.svg";

import styles from "../styles/Navbar.module.css";

import countries from "./dataset_summary";

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((val, index) => (
          <ListItem key={index}>
            <Link key={val.id} href={val.link}>
              <Button
                variant="text"
                onChange={(event) => setQuery(event.target.value)}
              >
                {val.name}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const menu = [
    {
      id: "0",
      name: "world map",
      link: "/",
    },
    {
      id: "1",
      name: "Filter Table",
      link: "/statistics",
    },
    {
      id: "2",
      name: "Share Data",
      link: "/shareData",
    },
    {
      id: "3",
      name: "About",
      link: "/about",
    },
  ];

  return (
    <>
      <Grid container className={styles.container}>
        <Grid
          item
          xs={8}
          sm={8}
          md={3}
          xl={3}
          lg={3}
          className={styles.logoContainer}
        >
          <Box sx={{ maxWidth: "240px" }}>
            <Image src={image} alt="logo" />
          </Box>
        </Grid>
        <Grid
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          item
          xs={0}
          sm={0}
          md={4}
          xl={4}
          lg={4}
          className={styles.subContainer}
        >
          <Box sx={{ width: "100%" }}>
            <Autocomplete
              id="country-select"
              sx={{ width: "100%" }}
              options={countries}
              autoHighlight
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const country = e.target.value;
                  const index = country.indexOf("(");
                  let abbr = country.slice(index + 1);
                  abbr = abbr.replace(")", "");
                  router.push(
                    {
                      pathname: "/countryInfo",
                      query: { abbr: abbr },
                    },
                    undefined,
                    { shallow: true }
                  );
                }
              }}
              getOptionLabel={(option) =>
                option.name + " (" + option.abbr + ")"
              }
              renderOption={(props, option) => (
                <Link href={"/countryInfo?abbr=" + option.abbr}>
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.abbr.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.abbr.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.name} ({option.abbr})
                  </Box>
                </Link>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </Box>
        </Grid>
        <Grid
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          item
          xs={0}
          sm={0}
          md={5}
          xl={5}
          lg={5}
        >
          <Box className={styles.menuContainer}>
            {menu.map((val) => (
              <Link key={val.id} href={val.link}>
                <Button variant="text">{val.name}</Button>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
          justifyContent="flex-end"
          sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          item
          xs={4}
          sm={4}
          md={0}
          xl={0}
          lg={0}
        >
          <>
            <IconButton
              sx={{ width: "80px" }}
              onClick={toggleDrawer("right", true)}
              aria-label="menu-icon"
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
            >
              {list("right")}
            </SwipeableDrawer>
          </>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
