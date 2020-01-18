import React, {useCallback, useEffect, useState} from 'react';
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
  const currentFilter = props.filter;
  const classes = useStyles();
  const clearButton = useSelector(state => state.clearButton);
  const dispatch = useDispatch();
  const setFilter = (currentFilter, fieldValue) => dispatch(indexActions.setFilter(currentFilter, fieldValue));
  const disableClearButton = useCallback(
      () => dispatch(indexActions.disableClearButton()), [dispatch]);

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setFilter(
      currentFilter, (currentFilter === 'minPageSize') ? parseInt(event.target.value) : event.target.value);
  };

  useEffect(
      () => {
        setValue('');
        disableClearButton();
      }, [clearButton, disableClearButton],
  );

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        value={value}
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