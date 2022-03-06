import abbr_data from "../data/abbr.json";
import { Box, Typography, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import data from "../data/dataset_summary.json";

import { useState, useEffect } from "react";

const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

const DataTable = () => {
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

  const [filterButtonEl, setFilterButtonEl] = useState(null);
  const [rows, setRows] = useState(data);

  useEffect(() => {
    setRows(rows);
  }, [rows]);

  return (
    <DataGrid
      disableSelectionOnClick
      components={{ Toolbar: CustomToolbar }}
      rows={rows}
      columns={columns}
      pageSize={50}
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
  );
};

export default DataTable;
