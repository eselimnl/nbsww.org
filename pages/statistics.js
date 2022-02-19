import { Box, Typography } from "@mui/material";
import styles from "../styles/Statistics.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import data from "../components/dataset_summary.json";
import { styled } from "@mui/material/styles";
import abbr_data from "../components/abbr.json";
import Toolbar from "@mui/material/Toolbar";

const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

function QuickFilteringGrid() {
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  const columns = [
    {
      field: "name",
      headerName: "Country",
      width: 150,
      editable: false,
    },
    {
      field: "CountTest",
      headerName: "Screened Conditions",
      width: 160,
      editable: false,
    },
    {
      field: "ens",
      headerName: "Expanded NBS",
      width: 130,
      editable: false,
    },
    {
      field: "endocrine",
      headerName: "Endocrine",
      sortable: false,
      width: 160,
      //valueGetter: (params) => console.log(params),
    },
    {
      field: "aminoacid",
      headerName: "Amino Acids",
      sortable: false,
      width: 160,
      //valueGetter: (params) => console.log(params),
    },
    {
      field: "organicAcid",
      headerName: "Organic Acids",
      sortable: false,
      width: 160,
      //valueGetter: (params) => console.log(params),
    },
    {
      field: "fattyAcid",
      headerName: "Fatty Acids",
      sortable: false,
      width: 160,
      //valueGetter: (params) => console.log(params),
    },
    {
      field: "Hemo",
      headerName: "Hemaglobinopathies",
      sortable: false,
      width: 160,
      //valueGetter: (params) => console.log(params),
    },
    {
      field: "miscellaneous",
      headerName: "Other",
      sortable: false,
      width: 160,
      //valueGetter: (params) => console.log(params),
    },
  ];

  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(data);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((firstName) => {
        console.log(row.firstName);
        //console.log(row[firstName]);
        // console.log(index);

        //return searchRegex.test(row[firstName].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(rows);
  }, [rows]);

  return (
    <Box
      sx={{
        height: 600,
        width: 1,
        bgcolor: "background.paper",
        boxShadow: 2,
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        "& .MuiDataGrid-columnHeader": {
          color: "primary.main",
        },
        "& .MuiDataGrid-cell": {
          borderRight: "1px solid",
          borderColor: "#E0E0E0",
        },
      }}
    >
      <DataGrid
        disableSelectionOnClick
        {...data}
        components={{ Toolbar: CustomToolbar }}
        rows={rows}
        columns={columns}
        getRowId={(row) => row.abbr}
        componentsProps={{
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
        }}
      />
    </Box>
  );
}

function SxProp() {
  const [rows, setRows] = React.useState(abbr_data);
  React.useEffect(() => {
    setRows(rows);
  }, [rows]);
  const columns = [
    {
      field: "short",
      headerName: "Short",
      width: 150,
      editable: false,
    },
    {
      field: "long",
      headerName: "Long",
      width: 500,
      editable: false,
    },
  ];
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Abbreviations
        </Typography>
      </Toolbar>
      <DataGrid
        {...abbr_data}
        columns={columns}
        rows={rows}
        getRowId={(row) => row.short}
      />
    </div>
  );
}
export default function Statistics() {
  return (
    <>
      <Box className={styles.container}>
        <QuickFilteringGrid />
      </Box>
      <Box className={styles.table2_container}>
        <SxProp />
      </Box>
    </>
  );
}
