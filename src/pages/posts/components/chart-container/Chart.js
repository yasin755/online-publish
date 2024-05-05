import * as React from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const data = [4000, 3000, 2000, null, 1890, 2390, 3490];
const xData = [
  "March 2",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
export default function Chart() {
  return (
    <div className="chart-section-ct">
    <Stack direction="row" spacing={2} alignItems='center' sx={{marginBottom: '15px'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Post Views</InputLabel>
        <Select
          labelId="postViews-select-small-label"
          id="post-views-select-small"
          label="Post Views"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div>vs.</div>
      <div className="select-metric-box">
        <Button>Select Metric</Button>
      </div>
    </Stack>
      <Stack sx={{ width: "100%" }}>
        <LineChart
          xAxis={[{ data: xData, scaleType: "point" }]}
          series={[{ data, connectNulls: true, area: true }]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      </Stack>
    </div>
  );
}