import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectNoticesError } from 'redux/notices/selectors';
import { selectError } from 'redux/auth/selectors';

import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import { PawPrintIcon } from '../utils/icons';
import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import { AddFormModalWrapper } from './AddPetModal.styled';

const AddPetModal = ({ backLink, category }) => {
  const navigate = useNavigate();
  const addMyPetError = useSelector(selectError);
  const addPetError = useSelector(selectNoticesError);
  const isError = Boolean(addMyPetError) || Boolean(addPetError);
  const text = isError
    ? 'Please try again, something wrong :('
    : 'Pet was successfully added :)';

  const buttonText =
    category === 'my-pet' ? 'Go to profile' : 'Go to your adds';
  const path = category === 'my-pet' ? '/user' : '/notices/my-pets';

  return (
    <AddFormModalWrapper>
      <p>{text}</p>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text={buttonText}
          icon={<PawPrintIcon />}
          clickHandler={() => {
            navigate(path);
          }}
          filled={false}
          isDisabled={false}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={() => navigate(backLink)}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </AddFormModalWrapper>
  );
};

AddPetModal.propTypes = PropTypes.shape({
  backLink: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
});

export default AddPetModal;
