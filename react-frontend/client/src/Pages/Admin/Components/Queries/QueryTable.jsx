import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Home/Tabs/Components/Table/Table.css";
import "./Queries.css";

export default function QueryTable({ rows }) {
  // Accept rows as a prop
  return (
    <div
      className="Table responsive-table"
      style={{
        boxShadow: "0px 13px 20px 0px #80808029",
        width: "90%",
        marginLeft: "50px",
      }}
    >
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Number</TableCell>
              <TableCell align="left">Query</TableCell>
              <TableCell align="left"></TableCell>
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
                <TableCell>
                  <button className="reply">Reply</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
