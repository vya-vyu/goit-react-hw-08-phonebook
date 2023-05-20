import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/Auth/authOperation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => dispatch(logOutUser())}>Logout</button>
    </div>
  );
};

export default UserMenu;
