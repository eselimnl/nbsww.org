import React, { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import LinearGradient from "./LinearGradient.js";
import { Box } from "@mui/material";

import countries from "./dataset_summary";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const colorScale = scaleLinear()
  .domain([0, 5, 10, 20, 30, 40])
  .range(["#ffffff", "#B1D0E0", "#6998AB", "#406882", "#22577E", "#1A374D"]);

const gradientData = {
  fromColor: "#ffffff",
  toColor: "#0c4a6e",
  min: 0,
  max: 40,
};

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setData(countries);
  }, []);

  return (
    <>
      <ComposableMap
        width={800}
        height={440}
        projectionConfig={{ scale: 147, center: [0, 0] }}
        data-tip=""
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.abbr === geo.properties.Alpha-2);
                let val = parseInt(d?.CountTest);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(val) : "#bdc3c7"}
                    stroke="#cccccc"
                    onMouseEnter={() => {
                      console.log(d);
                      const { NAME, POP_EST } = geo.properties;
                      setTooltipContent(
                        `${NAME} - Screened conditions: ${
                          d?.CountTest === undefined ? "Unknown" : d?.CountTest
                        }`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => {
                      if (d?.name === undefined) {
                      } else {
                        router.push(
                          {
                            pathname: "/countryInfo",
                            query: { abbr: d?.abbr },
                          },
                          undefined,
                          { shallow: true }
                        );
                      }
                    }}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
      <LinearGradient data={gradientData} />
    </>
  );
};

export default memo(MapChart);
