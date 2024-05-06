import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import DaterangePicker from '../date-range-picker/DaterangePicker';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons/faRotateRight';
import DataAnalytics from '../data-analytics/DataAnalytics';
import Chart from './Chart';
import PostsTable from '../posts-table/PostsTable';

const btnGrps = [
  {id: 1, name: 'Hourly'},
  {id: 1, name: 'Daily'},
  {id: 1, name: 'Weekly'},
  {id: 1, name: 'Monthly'}
]

export default function ChartContainer(){

  const [selectedFilter, setSelectedFilter] = useState('Daily');

  const selectfilterhandler = (btn) => {
    setSelectedFilter(btn);
  }

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
            {btnGrps && btnGrps.map((btn) => {
              return(
                <Button key={btn.id} className={selectedFilter === btn.name? 'active': null} onClick={() => selectfilterhandler(btn.name)}>{btn.name}</Button>
              )
            })}
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
        <div className="refresh-btn">
          <Button startIcon={<FontAwesomeIcon icon={faRotateRight} />}>Refresh</Button>
        </div>
        </div>
        <div className='d-flex'>
          <Chart filter={selectedFilter} />
        </div>
        <DataAnalytics />
        <PostsTable />
      </div>
    );
}