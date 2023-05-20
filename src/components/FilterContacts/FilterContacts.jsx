import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/Contacts/constactsSlice';
import { selectContactsFilter } from 'redux/Contacts/contactsSelectors';

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <>
      {/* <div className={s.filterWrapper}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          id="filter"
          type="text"
          name="name"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
          className={s.search}
        />
      </div> */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          // id="filter"
          type="text"
          name="name"
          value={filter}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </>
  );
};

export default FilterContacts;
