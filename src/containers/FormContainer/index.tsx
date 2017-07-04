import * as React from 'react';
import * as ProjectDetailsActions from '../../actions/details';
import * as style from './style.css';
import { reduxForm, Field } from 'redux-form'
import { RootState } from '../../reducers';
import { Interfaces } from './interfaces';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} />
    <p>{touched && error && <span>{error}</span>}</p>
  </div>
);

const required = value => (value ? undefined : 'Required');

@reduxForm({ form: 'edit'})
export class FormContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { fieldData, initialValues, actions, handleSubmit, cancelSubmit, submitting } = this.props;

    console.log(fieldData);

    return (
      <form onSubmit={handleSubmit}>
        {Object.keys(fieldData).map(function(fieldDatum, index){
          const { name, type, label, validators } = fieldData[fieldDatum];
          return (<Field key={index} name={name} type={type} label={label} component={renderField} validate={[required]} />)
        })}
        <button onClick={cancelSubmit} disabled={submitting}>Cancel</button>
        <button type="submit" disabled={submitting}>Save</button>
      </form>
    );

  }
  
}
