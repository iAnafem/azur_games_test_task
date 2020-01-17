import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@material-ui/core";


export const FilterSelectComponent = () => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const [fieldValue, setFieldValue] = useState('lol');

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = event => {
    setFieldValue(event.target.value);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Клиент
        </InputLabel>
        <Select
          MenuProps={{
            getContentAnchorEl: null,
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            }
          }}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={fieldValue}

          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="" >
            <Typography variant='body2'>
              <em>Выберите клиента</em>
            </Typography>
          </MenuItem>
          {/*{clientsList.map((client, id) => (*/}
          {/*  <MenuItem*/}
          {/*    key={`client_${id}`}*/}
          {/*    value={client.client_id}*/}
          {/*  >*/}
          {/*    <Typography variant='body2'>*/}
          {/*      {client.client_name}*/}
          {/*    </Typography>*/}
          {/*  </MenuItem>*/}
          {/*))}*/}
          <MenuItem
            value={fieldValue}
          >
            <Typography variant='body2'>
              c
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
};