
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
import {CalendarComponent} from "./CalendarComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },

  checkbox: {
    textAlign: 'right',
    display: 'inline-grid',
    alignContent: 'space-around',
  },
  labelText: {
    display: 'inline-grid',
    alignContent: 'space-around',
  },
  buttons: {
    alignContent: 'space-around',
    display: 'inline-grid',
  }


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
            <GroupCheckboxComponent group={filters.grDate} label={'Date'}/>
          </Grid>
          <Grid item xs={1} className={classes.labelText}>
            <Typography>
              Date filter
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <CalendarComponent label={'From'} initialDate={state.from} filter={filters.fromDate} maxDate={state.until}/>
          </Grid>
          <Grid item xs={2}>
            <CalendarComponent label={'Until'} initialDate={state.until} filter={filters.untilDate}/>
          </Grid>
          <Grid item xs={1} className={classes.buttons}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleGoClick(state)}
            >
              Go!
            </Button>
          </Grid>
          <Grid item xs={1} className={classes.buttons}>
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
            <GroupCheckboxComponent group={filters.grKey} label={'Keyword'}/>
          </Grid>
          <Grid item xs={1} className={classes.labelText}>
            <Typography>
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
            <GroupCheckboxComponent group={filters.grDom} label={'Domain'}/>
          </Grid>
          <Grid item xs={1} className={classes.labelText}>
            <Typography>
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
            <GroupCheckboxComponent group={filters.grStat} label={'Status code'}/>
          </Grid>
          <Grid item xs={1} className={classes.labelText}>
            <Typography>
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
          <Grid item xs={1} className={classes.labelText}>
            <Typography>
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
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={11}>
            <ResultDataTableComponent data={state.visitedPages}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default IndexPageContainer