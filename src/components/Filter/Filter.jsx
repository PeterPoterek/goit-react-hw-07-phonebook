import { FilterContainer, FilterLabel, FilterInput } from './FilterStyles';
import { setFilter } from '../../redux/phonebookSlice.js';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput id="filter" type="text" onChange={handleFilterChange} />
    </FilterContainer>
  );
};

export default Filter;
