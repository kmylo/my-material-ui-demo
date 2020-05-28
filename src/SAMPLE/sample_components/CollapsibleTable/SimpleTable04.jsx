import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { tableData } from "./";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    minWidth: 240,
  },
});
const tableData2 = [
  {
    number: "001003",
    name: "Green pencil",
    date: "2020-10-10",
    sku: 229,
    weight: "0.02kg",
    height: "20cm",
    width: "2cm",
    origin: "Singapore",
    minimum: 100,
    delay: "30 days",
  },
  {
    number: "001004",
    name: "Red pencil",
    date: "2020-10-10",
    sku: 243,
    weight: "0.02kg",
    height: "20cm",
    width: "2cm",
    origin: "Singapore",
    minimum: 100,
    delay: "30 days",
  },
];

const columns = [
  { path: "item", label: "Item" },
  { path: "number", label: "Number" },
  { path: "name", label: "Name" },
  { path: "date", label: "Date" },
];

export default function SimpleTable04() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col, idx) => (
              <TableCell key={idx}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row, idx) => {
            return (
              <TableRow key={idx}>
                {columns.map((col, idy) => {
                  if (col.path == "item")
                    return <TableCell key={idy}>{idx}</TableCell>;
                  return <TableCell key={idy}>{row[col.path]}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
