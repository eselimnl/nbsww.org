import abbr_data from "../data/abbr.json";
import { Box, Typography, Toolbar } from "@mui/material";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import { useState, useEffect } from "react";

const AbbreviationsTable = () => {
  const [rows, setRows] = useState(abbr_data);
  useEffect(() => {
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
      width: 1170,
      editable: false,
    },
  ];
  return (
    <DataGrid columns={columns} rows={rows} getRowId={(row) => row.short} />
  );
};

export default AbbreviationsTable;
