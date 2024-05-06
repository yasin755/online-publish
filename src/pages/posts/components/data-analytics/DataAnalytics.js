import React, {useState} from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { SpaRounded } from '@mui/icons-material';

const initialAnalyticsData = [
    {name: "visited content", count: '200000'},
    {name: "total time(hours)", count: '14000'},
    {name: "avg time(min)", count: '1:04'},
    {name: "page views", count: '40000'},
    {name: "unique page views", count: '35000'},
    {name: "visitors", count: '50000'},
    {name: "unique visitors", count: '45000'}
]

export default function DataAnalytics() {
    const [data, setData] = useState(initialAnalyticsData);

    function kConverter(num) {
      if(Number(num)) {
        if (num < 1000) {
            return num.toFixed(0);   // assuming an integer
        } else {
            const s = (0.1 * Math.floor(num / 100)).toFixed(1);
            return s.replace('.0', '');
            //return 'str' + <p> Every Morning</p>
            //return true;
        }
      }
  }

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
                  {/* <span className="num">{Number(item?.count)?kConverter(item.count) + 'k': item.count }</span> */}
                  {/* <span className="num" dangerouslySetInnerHTML={{ __html:  kConverter(item.count)}} /> */}
                  {/* <span className="num-postfix">k</span> */}
                  {
                    !isNaN(item?.count) && 
                    kConverter(item.count)
                  }
                  {
                    !isNaN(item?.count) && 
                    <span className='num-postfix'>K</span>
                    
                  }
                  {
                    isNaN(item?.count) && <span>{item?.count}</span>
                  }
                </div>
              </Stack>
            );
          })}
      </Box>
    );
}