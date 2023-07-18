import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filterInputId = nanoid();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      margin="normal"
      fullWidth
      id={filterInputId}
      value={filterValue}
      label="Find contacts by name"
      name="filter"
      autoFocus
      onChange={e => handleFilterChange(e)}
    />
  );
};
