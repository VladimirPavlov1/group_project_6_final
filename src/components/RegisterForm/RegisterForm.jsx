import css from '../RegisterForm/RegisterForm.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  const [isActive2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!isActive2);
  };

  let [pass, setPass] = useState(true);
  let [em, setEm] = useState(true);
  let [err, setErr] = useState(true);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const emailField = form.elements.email.value;
    const passwordField = form.elements.password.value;
    const confirmPasswordField = form.elements.confirmPassword.value;

    if (
      passwordField === confirmPasswordField &&
      emailField &&
      passwordField !== '' &&
      confirmPasswordField !== ''
    ) {
      setPass(pass);
      setEm(em);
      setErr(err);
      dispatch(
        register({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );

      form.reset();
      navigate('/user');
    } else if (
      !emailField &&
      confirmPasswordField === passwordField &&
      passwordField !== '' &&
      confirmPasswordField !== ''
    ) {
      setEm((em = false));
      setErr((err = true));
      setPass((pass = true));
    } else if (!emailField && !passwordField && !confirmPasswordField) {
      setErr((err = false));
      setPass((pass = true));
      setEm((em = true));
    } else if (confirmPasswordField !== passwordField) {
      setPass((pass = false));
      setEm((em = true));
      setErr((err = true));
    } else if (emailField && !passwordField) {
      setPass((pass = false));
      setEm((em = true));
      setErr((err = true));
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.header}>Registration</h2>

      <form className={css.formRegister} onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            className={css.inputRegister}
          ></input>
        </label>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Password"
              type={isActive ? 'text' : 'password'}
              name="password"
              className={css.inputRegister}
            ></input>
            <button type="button" className={css.eyeBttn} onClick={handleClick}>
              {isActive ? (
                <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              ) : (
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
            </button>
          </label>
        </div>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Confirm password"
              type={isActive2 ? 'text' : 'password'}
              name="confirmPassword"
              className={css.inputRegister}
            ></input>
            <button
              type="button"
              className={css.eyeBttn}
              onClick={handleClick2}
            >
              {isActive2 ? (
                <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              ) : (
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
            </button>
          </label>

          {pass ? '' : <p className={css.errorRassword}>Password mismatch</p>}
          {em ? '' : <p className={css.errorRassword}>Email incorrect</p>}
          {err ? '' : <p className={css.errorRassword}>Enter data</p>}
        </div>
        <button type="submit" className={css.bttnRegister}>
          Registration
        </button>
      </form>
      <div className={css.containerLog}>
        <p className={css.text}>Already have an account?</p>&nbsp;
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterForm;
