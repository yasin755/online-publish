import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import DaterangePicker from '../date-range-picker/DaterangePicker';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataAnalytics from '../data-analytics/DataAnalytics';
import Chart from './Chart';
import PostsTable from '../posts-table/PostsTable';

const buttons = [
  <Button key="hourly">Hourly</Button>,
  <Button key="daily">Daily</Button>,
  <Button key="weekly">Weekly</Button>,
  <Button key="monthly">Monthly</Button>,
];

export default function ChartContainer(){
    return (
      <div className="">
      <div className='d-flex'>
        <Box
          sx={{
            display: "flex",

            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            size="small"
            className='btn-group-tool'
            variant="outlined"
            aria-label="Small button group"
          >
            {buttons}
          </ButtonGroup>
        </Box>
        <DaterangePicker />
        <Box sx={{ "& button": { m: 1 } }}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<FontAwesomeIcon fontSize="small" icon={faFilter} />}
          >
            Filter
          </Button>
        </Box>
        </div>
        <div className='d-flex'>
          <Chart />
        </div>
        <DataAnalytics />
        <PostsTable />
      </div>
    );
}