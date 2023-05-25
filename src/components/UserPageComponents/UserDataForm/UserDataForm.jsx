
import { Formik} from 'formik';
import userPhoto from '../../../image/user-photo-default.png';
import styles from './UserDataForm.module.css';
import { BsCheck2 } from 'react-icons/bs';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { userStateValues } from 'redux/user/selectors';
import UserDataFormItem from './UserDataFormItem';
 // на маунте компонента делать запрос на бекенд на получение данных пользователя  и если их нет то значение по дефолту, а если есть то подставлять данные с бека
const initReadOnlyValue = {
  name: true,
  email: true,
  birthday: true,
  phone: true,
  city: true,
};



const UserDataForm = () => {
  const userState = useSelector(userStateValues);

  const [selectedFile, setSelectedFile] = useState(null);
    const [isReadonly, setIsReadonly] = useState(initReadOnlyValue);

  const [state, setState] = useState({ ...userState });
    const [inputName, setInputName] = useState('');
    
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    setInputName(name);
  };
    const onClickButton = (e) => {
      const { name} = e.target;
    setIsReadonly({...isReadonly, [name]: false});
  };

    const handleChangeAvatar = e => {
      const {name} = e.target
    setSelectedFile(e.target.files[0]);
    const src = window.URL.createObjectURL(e.target.files[0]);
        setState({ ...state, [name]: src });
        setInputName(name);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select file!');
      return;
    }
    const formData = new FormData();
    formData.append('file', state.avatar); //название файла нужно узнать у бекенда, под каким ключом он лежит

    //сделать запрос на сервер что бы сохранить картинку там useDispatch( patch   data...) 
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputName) {
      alert('Please write something');
      return;
    }
    console.log({ [inputName]: state[inputName] }); //диспачить 
    setInputName('');
    setIsReadonly(initReadOnlyValue);
  };

  return (
    <Formik>
      <form onSubmit={handleSubmit} className={styles.box} autoComplete="off">
        <div className="photo-container">
          <img
            className={styles.photo}
            src={state.avatar ? state.avatar : userPhoto}
            alt="user"
            width={182}
            height={182}
          />
          <div className={styles.edit}>
            {selectedFile ? (
              <button
                type="submit"
                className={styles.buttonUploadHidden}
                onClick={handleUpload}
              >
                <BsCheck2
                  size={24}
                  color="#54ADFF"
                  style={{ pointerEvents: 'none' }}
                />
              </button>
            ) : (
              <MdOutlinePhotoCamera size={24} color="#54ADFF" />
            )}
            <div className={styles.container}>
              {selectedFile ? (
                <p className={styles.confirm}>Confirm</p>
              ) : (
                <>
                  <input
                    type="file"
                    id="file"
                    name="avatar"
                    className={styles.inputHidden}
                    onChange={handleChangeAvatar}
                    accept="image/png, image/jpeg"
                  />
                  <label className={styles.labelPhoto} htmlFor="file">
                    Edit Photo
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <UserDataFormItem
            id={'user_name'}
            value={state.name}
            placeholder={'Anna |'}
            name={'name'}
            label={'Name:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.name}
            onClick={onClickButton}
            disabled={inputName ? true : false}
          />
          <UserDataFormItem
            id={'user_email'}
            value={state.email}
            placeholder={'anna00@gmail.com|'}
            name={'email'}
            label={'Email:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.email}
            onClick={onClickButton}
            disabled={inputName ? true : false}
          />
          <UserDataFormItem
            id={'user_birthday'}
            value={state.birthday}
            placeholder={'00.00.0000'}
            name={'birthday'}
            label={'Birthday:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.birthday}
            onClick={onClickButton}
            disabled={inputName ? true : false}
          />
          <UserDataFormItem
            id={'user_phone'}
            value={state.phone}
            placeholder={'+38000000000'}
            name={'phone'}
            label={'Phone:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.phone}
            onClick={onClickButton}
            disabled={inputName ? true : false}
          />
          <UserDataFormItem
            id={'user_city'}
            value={state.city}
            placeholder={'Kiev'}
            name={'city'}
            label={'City:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.city}
            onClick={onClickButton}
            disabled={inputName ? true : false}
          />
        </div>
      </form>
    </Formik>
  );
};

export default UserDataForm;
