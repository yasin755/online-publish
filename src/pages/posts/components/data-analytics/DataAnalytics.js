import React, {useState} from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';

const initialAnalyticsData = [
    {name: "visited content", count: '200k'},
    {name: "total time(hours)", count: '14k'},
    {name: "avg time(min)", count: '1:04'},
    {name: "page views", count: '40k'},
    {name: "unique page views", count: '35k'},
    {name: "visitors", count: '50k'},
    {name: "unique visitors", count: '45k'}
]

export default function DataAnalytics() {
    const [data, setData] = useState(initialAnalyticsData);
    return (
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: 'space-between',
          p: 3,
          mt: 2,
          border: "1px solid #dddddd",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        {data &&
          data.map((item) => {
            return (
              <Stack key={item.name} direction={"column"}>
                <p className="num-text">{item?.name}</p>
                <div className="d-flex number-ct">
                  <span className="num">{item?.count}</span>
                  {/* <span className="num-postfix">k</span> */}
                </div>
              </Stack>
            );
          })}
      </Box>
    );
}