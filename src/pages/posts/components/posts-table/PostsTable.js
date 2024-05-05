import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { 
    field: 'id',
    flex: 3,
    renderCell: (params) => {
        return(
            <div className="post-title-ct">
                <div className="title">{params.value}  {params.row?.title}</div>
                <p><span className="article-txt">Article</span> <span className="article-dt-txt">{params.row?.articleDetails?.date}</span> <span className="article-txt-author">{params.row?.articleDetails?.author}</span> <span className="article-desc">{params.row?.articleDetails?.desc}</span></p>
            </div>
        )
    },
    renderHeader: (params) => {
        return(
            <h3>Top 50 Posts</h3>
        )
    }
  },
  {
    field: 'uniquePageViews',
    headerName: 'Unique Page Views',
    type: 'number',
    flex: 1
  },
  {
    field: 'pageViews',
    headerName: 'Page Views',
    type: 'number',
    flex: 1
  },
  {
    field: 'timeSpent',
    headerName: 'Time Spent',
    type: 'number',
    flex: 1,
    sorting: true
  },
  {
    field: 'visitors',
    headerName: 'Visitors',
    type: 'number',
    flex: 1
  },
  
];

const rows = [
    { id:1, title: 'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews:10000, pageViews: 10000, timeSpent: 10, visitors: 100000, articleDetails: {author: 'Author1', date: '12 Jan 2022', desc: 'Decorating'} },
    { id:2, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews:10000, pageViews: 10000, timeSpent: 500, visitors:10000, articleDetails: {author: 'Author1', date: '12 Jan 2022', desc: 'Decorating'}},
    { id:3, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 300, visitors: 100000, articleDetails: {author: 'Author1', date: '12 Jan 2022', desc: 'Decorating' }},
    { id:4, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 100, visitors: 100000 },
    { id:5, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 200, visitors: 100000 },
    { id:6, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 10000, visitors:10000},
    { id:7, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 10000, visitors: 100000 },
    { id:8, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 10000, visitors: 100000 },
    { id:9, title:  'Your 2024 zodiac sign guide to the best houseplants', uniquePageViews: 10000, pageViews: 10000, timeSpent: 10000, visitors: 100000 },
  ];

export default function PostsTable() {
  return (
    <Box sx={{ mt:2, height: 'auto', width: '100%', backgroundColor: '#fff' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          sorting: {
            sortModel: [{filed: 'timeSpent', sort: 'desc'}]
          }
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
