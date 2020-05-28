import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    minWidth: 240,
  },
});
const tableData = [
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
  { path: "number", label: "Number" },
  { path: "name", label: "Name" },
  { path: "date", label: "Date" },
];
// renderCell(user, column) {
//     if (column.content) return column.content(user);
//     return user[column.path];
//   }

//Refactor to array

function createData2(
  number,
  name,
  date,
  sku,
  weight,
  height,
  width,
  origin,
  minimum,
  delay
) {
  return {
    number,
    name,
    date,
    sku,
    weight,
    height,
    width,
    origin,
    minimum,
    delay,
  };
}

const rows02 = [
  createData2(
    "001003",
    "Green pencil",
    "2020-10-10",
    229,
    "0.02kg",
    "20cm",
    "2cm",
    "Singapore",
    100,
    "30 days"
  ),
  createData2(
    "001004",
    "Red pencil",
    "2020-10-10",
    243,
    "0.02kg",
    "20cm",
    "2cm",
    "Singapore",
    100,
    "30 days"
  ),
];

export default function SimpleTable03() {
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
          {rows02.map((row, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
              </TableRow>
            );
          })}
          {tableData.map((row, idx) => {
            return (
              <TableRow key={idx}>
                {columns.map((col, idy) => {
                  console.log("colss", col);
                  return (
                    <TableCell key={idy}>
                      {console.log("row", row)}
                      {console.log("col", col)}
                      {console.log("idy", idy)}
                      {row[col.path]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
