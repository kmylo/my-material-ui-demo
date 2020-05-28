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

const columns = [
  { path: "item", label: "Item" },
  { path: "number", label: "Number" },
  { path: "name", label: "Name" },
  { path: "date", label: "Date" },
  { path: "sku", label: "Sku" },
  { path: "weight", label: "Weight" },
  { path: "height", label: "Height" },
  { path: "width", label: "Width" },
  { path: "origin", label: "Origin" },
  { path: "minimum", label: "Minimum" },
  { path: "delay", label: "Delay" },
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
                  if (col.path === "item")
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
