import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

export default function BasicTable({ rows }) {
  // Accept rows as a prop
  return (
    <div className="Table">
      <h1>Recent Contacts</h1>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          borderRadius: "15px",
        }}
      >
        <Table className="main-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Number</TableCell>
              <TableCell align="left">Query</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="left">{row.query}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
