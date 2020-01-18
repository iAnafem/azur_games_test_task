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
        width: 'auto',
        border: 'solid',
        borderWidth: 'thin',
    },
});


export const ResultDataTableComponent = (props) => {
    const classes = useStyles();
    const isLoading = useSelector(state => state.isLoading);

    const data = props.data;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    {isLoading ?
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
                        :
                        data.length !== 0 &&
                        <TableRow>
                            {'date_of_visit' in data[0] &&
                            <TableCell>Date</TableCell>
                            }
                            {'keyword' in data[0] &&
                            <TableCell>Keyword</TableCell>
                            }
                            {'page_url' in data[0] &&
                            <TableCell>Page url</TableCell>
                            }
                            {'domain' in data[0] &&
                            <TableCell>Domain</TableCell>
                            }
                            {'load_time' in data[0] &&
                            <TableCell>Load time</TableCell>
                            }
                            {'status_code' in data[0] &&
                            <TableCell>Status code</TableCell>
                            }
                            {'page_size' in data[0] &&
                            <TableCell>Page size</TableCell>
                            }
                            {'total_size' in data[0] &&
                            <TableCell>Total size</TableCell>
                            }
                        </TableRow>
                    }
                </TableHead>
                <TableBody>
                    {data.map((row, id) => (
                        <TableRow key={`row_${id}`}>
                            {Object.keys(row).map((column, pk) => (
                                column !== 'id' &&
                                <TableCell key={`column_${pk}`}>{row[column]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
