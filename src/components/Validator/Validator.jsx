import { useCallback, useState } from 'react';
import validator from 'validator';
import { regExp } from '../../utils/constants';

export function Validator(inizialValues) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());

    if (name === 'name') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили поле name.' });
      } else if (!regExp.test(value)) {
        setErrors({ ...errors, [name]: 'Поле name может содержать только латиницу, кириллицу, пробел или дефис.' });
        setIsValid(false);
      } else if (value === inizialValues.name && !values.email) {
        setIsValid(false);
      } else if (value === inizialValues.name && values.email === inizialValues.email) {
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }

    if (name === 'email') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили поле email.' });
      } else if (!validator.isEmail(value)) {
        setErrors({ ...errors, [name]: 'Вы ввели некорректный email.' });
        setIsValid(false);
      } else if (value === inizialValues.email && !values.name) {
        setIsValid(false);
      } else if (value === inizialValues.email && values.name === inizialValues.name) {
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm };
}
