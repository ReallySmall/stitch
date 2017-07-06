import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export const renderTextField = ({ input, label, type, meta: { touched, error }, index }) => {

  const textboxClass = classNames({});

  return (
    <div className={style['form-field']}>
      <div className={textboxClass}>
        <label>{label}</label>
        <input {...input} autoFocus={index > 0 ? false : true} type={type} className="mdl-textfield__input" />
        {touched && error && <p className={style['validation-error']}>{error}</p>}
      </div>
    </div>
  )

};

export const renderCheckboxField = ({ input, label, type, meta: { touched, error } }) => {

  const checkboxClass = classNames({
    'mdl-checkbox': true,
    'is-upgraded': true,
    'is-checked': input.checked ? true : false
  });

  return (
    <div className={style['form-field']}>
      <label className={checkboxClass}>
        <input {...input} type={type} className="mdl-checkbox__input" />
        <span className="mdl-checkbox__label">{label}</span>
        <span className="mdl-checkbox__box-outline">
          <span className="mdl-checkbox__tick-outline"></span>
        </span>
      </label>
    </div>
  )

};