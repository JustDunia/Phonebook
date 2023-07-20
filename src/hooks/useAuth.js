import { useSelector } from 'react-redux';
import {
  selectUserData,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/authorization/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userData = useSelector(selectUserData);

  return {
    isLoggedIn,
    isRefreshing,
    userData,
  };
};
