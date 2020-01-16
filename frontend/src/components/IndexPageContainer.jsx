import React, {useCallback, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import * as indexActions from '../actions/indexActions'
import {useDispatch, useSelector} from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));


const IndexPageContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchVisitedPages = useCallback(
    () => dispatch(indexActions.fetchVisitedPages()), [dispatch]
  );

  useEffect(() => {
    fetchVisitedPages()
    }, [fetchVisitedPages]
  );

  const state = useSelector(state => state);

  return (
    <Paper className={classes.mainPaper}>
      {console.log(state.visitedPages, state.isLoading)}
      <Grid container direction={'row'} className={classes.root}>
          <Grid item xs={4}>
            Hello!
          </Grid>
          <Grid item xs={4}>
            Hello!
          </Grid>
          <Grid item xs={4}>
            Hello!
          </Grid>
      </Grid>
    </Paper>
  )
};

export default IndexPageContainer