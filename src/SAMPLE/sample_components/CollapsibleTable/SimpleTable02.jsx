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

export default function SimpleTable02() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="left">Name</TableCell>
            {/* <TableCell align="left">Date</TableCell>
            <TableCell align="center">Sku</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows02.map((row, idx) => {
            console.log(row);
            return (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                {/* <TableCell align="left">{row.date}</TableCell>
                <TableCell align="center">{row.sku}</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
