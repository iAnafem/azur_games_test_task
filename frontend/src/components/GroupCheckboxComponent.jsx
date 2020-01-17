import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch} from "react-redux";
import * as indexActions from "../actions/indexActions";

export const GroupCheckboxComponent = (props) => {
  const group = props.group;
  const dispatch = useDispatch();
  const setGroup = () => dispatch(indexActions.setGroup(group));

  const resetGroup = () => dispatch(indexActions.resetGroup(group));

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    if (checked) {
      setChecked(event.target.checked);
      resetGroup();
    } else {
      setChecked(event.target.checked);
      setGroup();
    }
  };

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