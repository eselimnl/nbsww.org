import { Box, Button } from "@mui/material";
import styles from "../styles/Statistics.module.css";
import * as React from "react";
import { useState } from "react";

import AbbreviationsTable from "../components/AbbreviationsTable";
import DataTable from "../components/DataTable";

export default function Statistics() {
  const [content, setContent] = useState("data");

  return (
    <Box className={styles.container}>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              textAlign: "center",
              padding: "8px",
              fontWeight: 500,
              bgcolor: "#0984e3",
              color: "white",
              width: "120px",
              borderRadius: "24px 24px 0 0",
              boxShadow: 2,
              fontSize: 16,
            }}
            onClick={() => setContent("data")}
          >
            Data
          </Button>
          <Button
            sx={{
              marginLeft: "6px",
              textAlign: "center",
              padding: "8px",
              fontWeight: 500,
              bgcolor: "#273c75",
              color: "white",
              width: "200px",
              borderRadius: "24px 24px 0 0",
              boxShadow: 2,
              fontSize: 16,
            }}
            onClick={() => setContent("abbreviations")}
          >
            Abbreviations
          </Button>
        </Box>
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
          {content === "data" ? <DataTable /> : <AbbreviationsTable />}
        </Box>
      </Box>
    </Box>
  );
}
