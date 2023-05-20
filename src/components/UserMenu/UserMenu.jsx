import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/Auth/authOperation';
import { Typography, Button, Toolbar } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Hello, {name}
        </Typography>
        <Button
          onClick={() => dispatch(logOutUser())}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Logout
        </Button>
      </Toolbar>
    </div>
  );
};

export default UserMenu;
