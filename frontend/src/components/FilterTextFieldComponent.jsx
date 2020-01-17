import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import * as indexActions from "../actions/indexActions";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));

export const FilterTextFieldComponent = (props) => {
  const initialValue = props.value;
  const currentFilter = props.filter;
  const classes = useStyles();
  const dispatch = useDispatch();
  const setFilter = (currentFilter, fieldValue) => dispatch(indexActions.setFilter(currentFilter, fieldValue));

  const handleChange = (event) => {
    setFilter(
      currentFilter, (currentFilter === 'minPageSize') ? parseInt(event.target.value) : event.target.value)
  };

  return (
    <form className={classes.root} autoComplete="off">
      <TextField
        defaultValue={initialValue}
        label={props.label}
        variant="outlined"
        size={'small'}
        color="primary"
        inputProps={{
          maxLength: props.border
        }}
        onChange={handleChange}
      />
    </form>
  );
};