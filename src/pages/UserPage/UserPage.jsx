import styles from './UserPage.module.css'
import UserData from 'components/UserPageComponents/UserData/UserData';
import LogOut from "components/LogOut/LogOut";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const UserPage = () => {

  //  const dispatch = useDispatch();
  //  useEffect(() => {
  //    dispatch(fetchUserData());
  //  }, [dispatch]);
  
  return (
    <>
      <h2 className={styles.title}>My information:</h2>
      <div className={styles.box}>
        <UserData />
        <LogOut />
      </div>
    </>
  );
}

export default UserPage;