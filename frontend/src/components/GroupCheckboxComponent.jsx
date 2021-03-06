import React, {useCallback, useEffect, useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch, useSelector} from "react-redux";
import * as indexActions from "../actions/indexActions";

export const GroupCheckboxComponent = (props) => {
  const group = props.group;
  const columnLabel = props.label;
  const dispatch = useDispatch();
  const clearButton = useSelector(state => state.clearButton);
  const setGroup = () => dispatch(indexActions.setGroup(group));
  const addColumn = () => dispatch(indexActions.addTableColumn(columnLabel));
  const removeColumn = () => dispatch(indexActions.removeTableColumn(columnLabel));

  const resetGroup = () => dispatch(indexActions.resetGroup(group));

  const [checked, setChecked] = useState(false);

  const disableClearButton = useCallback(
      () => dispatch(indexActions.disableClearButton()), [dispatch]);

  const handleChange = (event) => {
    if (checked) {
      setChecked(event.target.checked);
      removeColumn();
      resetGroup();
    } else {
      setChecked(event.target.checked);
      addColumn();
      setGroup();
    }
  };

  useEffect(
      () => {
        setChecked(false);
        disableClearButton();
      }, [clearButton, disableClearButton],
  );

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        value="primary"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
};