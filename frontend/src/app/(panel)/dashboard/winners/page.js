"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Winners() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <section className="w-full ">
        <div className="flex justify-between items-center">
          <h5 className="mb-4 font-bold">
            Winners<span> - Contest Name</span>
          </h5>
        </div>
      </section>
      <section className="flex flex-col  gap-6 h-[98%] pb-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-between">
            <Box component="form" sx={{}} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                className="border px-4 py-4 mr-4  rounded"
                InputLabelProps={{
                  style: { color: "#6d28d9" },
                }}
              />
            </Box>
            <Box sx={{ minWidth: 160, marginRight: 4 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="text-violet-700 border-violet-700"
                >
                  Active Contest
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="sort"
                  onChange={handleChange}
                  className="border"
                >
                  <MenuItem value={"az"}>A - Z</MenuItem>
                  <MenuItem value={"za"}>Z - A</MenuItem>
                  <MenuItem value={"product"}>Product</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 160, marginRight: 4 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="text-violet-700 border-violet-700"
                >
                  Inactive Contest
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="sort"
                  onChange={handleChange}
                  className="border"
                >
                  <MenuItem value={"az"}>A - Z</MenuItem>
                  <MenuItem value={"za"}>Z - A</MenuItem>
                  <MenuItem value={"product"}>Product</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 160, marginRight: 4 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="text-violet-700 border-violet-700"
                >
                  All Winners
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="sort"
                  onChange={handleChange}
                  className="border"
                >
                  <MenuItem value={"az"}>A - Z</MenuItem>
                  <MenuItem value={"za"}>Z - A</MenuItem>
                  <MenuItem value={"product"}>Product</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <button className="px-4 py-2 bg-violet-700 text-white rounded-md flex">
            <span className="mr-2">Select Winner</span> <EmojiEventsIcon />
          </button>
        </div>
        <TableContainer className="shadow-md-0-0 rounded-md">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  Ticket No
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="">Email</TableCell>
                <TableCell align="">Mobile</TableCell>
                <TableCell align="">Status</TableCell>
                <TableCell align="">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className="border-b bg-cyan-100">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-red-700 font-bold">
                  Winner
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
              <TableRow className="border-b">
                <TableCell component="th" scope="row">
                  456123
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell align="">john@gmail.com</TableCell>
                <TableCell align="">9876543210</TableCell>
                <TableCell align="" className="text-theme-gray font-bold">
                  Lost
                </TableCell>
                <TableCell align="" className="text-theme-purple font-bold">
                  View More
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
}
