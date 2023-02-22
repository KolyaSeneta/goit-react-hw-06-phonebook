import { filterAction } from 'components/redux/contactsRedux/filter-slice';
import { selectFilter } from 'components/redux/contactsRedux/FilterSelector';
// import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import css from './Filter/filter.module.css';

export const Filter = () => {


     const filterValue = useSelector(selectFilter)
    const dispatch = useDispatch()
    return(<div>
    <label>Find contacts by Name </label>
    <input
      type="text"
      name="filter"
      placeholder="Filter"
      value={filterValue}
      onChange={(e)=>{dispatch(filterAction(e.target.value))}}
    ></input>
  </div>)
  
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleOnChange: propTypes.func.isRequired,
// };
