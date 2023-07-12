import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filterInputId = nanoid();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type="text"
        id={filterInputId}
        value={filterValue}
        onChange={e => handleFilterChange(e)}
        name="filter"
      />
    </div>
  );
};
