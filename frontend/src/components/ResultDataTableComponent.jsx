import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export const ResultDataTableComponent = (props) => {
  const classes = useStyles();
  const columns = useSelector(state => state.tableColumns);


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Keyword</TableCell>
                        <TableCell>Page url</TableCell>
                        <TableCell>Domain</TableCell>
                        <TableCell>Load time</TableCell>
                        <TableCell>Status code</TableCell>
                        <TableCell>Page size</TableCell>
                        <TableCell>Total size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, id) => (
                        <TableRow key={`row_${id}`}>
                            <TableCell>{row.date_of_visit}</TableCell>
                            <TableCell>{row.keyword}</TableCell>
                            <TableCell>{row.page_url}</TableCell>
                            <TableCell>{row.domain}</TableCell>
                            <TableCell>{row.load_time}</TableCell>
                            <TableCell>{row.status_code}</TableCell>
                            <TableCell>{row.page_size}</TableCell>
                            <TableCell>{row.total_size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           {columns.length !== 0 ?
//               <TableRow>
//                   {console.log('do header')}
//                 {columns.map((column, id) => (
//                     <TableCell key={`column_${id}`}>{column}</TableCell>
//                 ))}
//                 <TableCell>Total size</TableCell>
//               </TableRow>
//               :
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Keyword</TableCell>
//                 <TableCell>Page url</TableCell>
//                 <TableCell>Domain</TableCell>
//                 <TableCell>Load time</TableCell>
//                 <TableCell>Status code</TableCell>
//                 <TableCell>Page size</TableCell>
//               </TableRow>
//           }
//         </TableHead>
//           {columns.length !== 0 ?
//               <TableBody>
//                   {props.data.map((row, id) => (
//                       <TableRow key={`row_${id}`}>
//                           {console.log('do rows')}
//                           {columns.includes('Date') && <TableCell>{row.date_of_visit}</TableCell>}
//                           {columns.includes('Keyword') && <TableCell>{row.keyword}</TableCell>}
//                           {columns.includes('Domain') && <TableCell>{row.domain}</TableCell>}
//                           {columns.includes('Status code') && <TableCell>{row.status_code}</TableCell>}
//                           <TableCell>{row.total_size}</TableCell>
//                       </TableRow>
//                   ))}
//               </TableBody>
//               :
//               <TableBody>
//                   {props.data.map((row, id) => (
//                       <TableRow key={`row_${id}`}>
//                           <TableCell>{row.date_of_visit}</TableCell>
//                           <TableCell>{row.keyword}</TableCell>
//                           <TableCell>{row.page_url}</TableCell>
//                           <TableCell>{row.domain}</TableCell>
//                           <TableCell>{row.load_time}</TableCell>
//                           <TableCell>{row.status_code}</TableCell>
//                           <TableCell>{row.page_size}</TableCell>
//                           <TableCell>{row.total_size}</TableCell>
//                       </TableRow>
//                   ))}
//               </TableBody>
//           }
//       </Table>
//     </TableContainer>