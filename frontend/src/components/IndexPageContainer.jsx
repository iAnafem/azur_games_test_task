
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import * as indexActions from '../actions/indexActions'
import {useDispatch, useSelector} from "react-redux";
import filtersAndGroupsNames from "../constants/filtersAndGroupsNames";
import { GroupCheckboxComponent } from "./GroupCheckboxComponent";
import {FilterTextFieldComponent} from "./FilterTextFieldComponent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {ResultDataTableComponent} from "./ResultDataTableComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },

  checkbox: {
    textAlign: 'right'
  },
  labelText: {

  },


}));


const IndexPageContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchVisitedPages = (state) => dispatch(indexActions.fetchVisitedPages(state));
  const clearState = () => dispatch(indexActions.clearState());
  const state = useSelector(state => state);

  const filters = filtersAndGroupsNames;

  const handleGoClick = (state) => {
    fetchVisitedPages(state)
  };

  const handleClearClick = () => {
    clearState();
  };

  return (
    <Paper className={classes.mainPaper}>
      <Grid container className={classes.root}>
        <Grid container direction={'row'}>
          <Grid item xs={1} className={classes.checkbox}>
            <GroupCheckboxComponent group={filters.grDate}/>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.labelText}>
              Date filter
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FilterTextFieldComponent filter={filters.fromDate}/>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleGoClick(state)}
            >
              Go!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleClearClick()}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
        <Grid container direction={'row'}>
          <Grid item xs={1} className={classes.checkbox}>
            <GroupCheckboxComponent group={filters.grKey}/>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.labelText}>
              Keyword filter
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FilterTextFieldComponent
              filter={filters.keyword}
              value={state.keyword}
              label={'Enter keyword, please'}
              border={200}
            />
          </Grid>
        </Grid>
        <Grid container direction={'row'} >
          <Grid item xs={1} className={classes.checkbox}>
            <GroupCheckboxComponent group={filters.grDom}/>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.labelText}>
              Domain filter
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FilterTextFieldComponent
              filter={filters.domain}
              value={state.domain}
              label={'Enter domain, please'}
              border={200}
            />
          </Grid>
        </Grid>
        <Grid container direction={'row'}>
          <Grid item xs={1} className={classes.checkbox}>
            <GroupCheckboxComponent group={filters.grStat}/>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.labelText}>
              Status code filter
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FilterTextFieldComponent
              filter={filters.statusCode}
              value={state.statusCode}
              label={'Enter status code, please'}
              border={3}
            />
          </Grid>
        </Grid>
        <Grid container direction={'row'}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.labelText}>
              Page size filter
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FilterTextFieldComponent
              filter={filters.minPageSize}
              value={state.minPageSize ? parseInt(state.minPageSize) : ''}
              label={'Enter minimum page size, please'}
              border={9}
            />
          </Grid>
        </Grid>
        <Grid container direction={'row'}>
          <Grid item xs={12}>
            <ResultDataTableComponent data={state.visitedPages}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default IndexPageContainer