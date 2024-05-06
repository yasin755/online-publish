import React, {useState, useEffect} from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function Chart({filter}) {
 
  const [data, setYData] = useState([]);
  const [xData, setXData] = useState([]);

  useEffect(() => {
    //setData
    refreshChartData(filter);
  }, [filter]);

  const refreshChartData = (filter) => {
    if(filter === 'Weekly') {
      weeklyDataHandler();
    } else {
      dailyDataHandler();
    }
  }

  const dailyDataHandler = () => {
    const yAxisData = [12, 5, 10, 15, 5, 18];
    const xAxisData = [
      "May 1",
      "May 2",
      "May 3",
      "May 4",
      "May 5",
      "May 6"
    ];
    setXData(xAxisData);
    setYData(yAxisData);
  }

  const weeklyDataHandler = () => {
    const yAxisData = [14, 20];
    const xAxisWeeklyData = [
      "May 1st week",
      "May 2nd week"
    ];
    setXData(xAxisWeeklyData);
    setYData(yAxisData);
  }

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
          series={[{ data, connectNulls: true, area: true, color: '#4e79a7' }]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      </Stack>
    </div>
  );
}