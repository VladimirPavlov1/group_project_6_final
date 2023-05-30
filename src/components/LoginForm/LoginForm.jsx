import css from '../LoginForm/LoginForm.module.css';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  let [pass, setPass] = useState(true);
  let [em, setEm] = useState(true);
  let [err, setErr] = useState(true);
  let [err2, setErr2] = useState(true)
  const [loading, setLoading] = useState(false);

  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const emailField = form.elements.email.value;
    const passwordField = form.elements.password.value;

    const credentials = {
      email: emailField,
      password: passwordField,
    };
    if (loading) {
      return;
    }

    if (passwordField && emailField) {
      setLoading(true);
      try {
        await dispatch(logIn(credentials)).then(data => {          
          if (data.error) {
            setErr2(false)            
          } else {
              form.reset();
              navigate('/user');
          }
        })        
        
      }
      catch (error) {
        console.error(error)        
      } finally {        
        setLoading(false);
      }
      
      
    } else if (!emailField && passwordField) {
      setEm((em = false));
      setErr((err = true));
      setPass((pass = true));
    } else if (!emailField && !passwordField) {
      setErr((err = false));
      setPass((pass = true));
      setEm((em = true));
    } else if (emailField && !passwordField) {
      setPass((pass = false));
      setEm((em = true));
      setErr((err = true));
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.header}>Login</h2>

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
          {pass ? '' : <p className={css.errorRassword}>Enter password</p>}
          {em ? '' : <p className={css.errorRassword}>Enter email</p>}
          {err ? '' : <p className={css.errorRassword}>Enter data</p>}
          {err2 ? '' :<p className={css.errorRassword}>Email or password incorrect</p>}
        </div>

        <button type="submit" className={css.bttnRegister}>
          Login
        </button>
      </form>
      <div className={css.containerLog}>
        <p className={css.text}>Don't have an account?</p>&nbsp;
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
