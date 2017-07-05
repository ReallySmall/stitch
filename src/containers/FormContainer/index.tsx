import * as React from 'react';
import * as ProjectDetailsActions from '../../actions/details';
import * as style from './style.css';
import { reduxForm, Field } from 'redux-form'
import { RootState } from '../../reducers';
import { Interfaces } from './interfaces';

const renderField = ({ input, label, type, meta: { touched, error } }) => {

  return (
    <div className="form-field mdl-textfield" style={{display: 'block'}}>
      <label className="">{label}</label>
      <input {...input} type={type} className="mdl-textfield__input" />
      {touched && error && <p className="validation-error">{error}</p>}
    </div>
  )

};

const required = value => (value ? undefined : 'Required');

@reduxForm({ form: 'edit'})
export class FormContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { fieldData, initialValues, handleSubmit, cancelSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {Object.keys(fieldData).map(function(fieldDatum, index){
          
          const { name, type, label, validators } = fieldData[fieldDatum];
          let validate = [];

          if(validators.includes('required'){
            validate.push(required);
          }

          return (<Field key={index} name={name} type={type} label={label} component={renderField} validate={validate} />)

        })}
        <button onClick={cancelSubmit} disabled={submitting} className="mdl-button mdl-button--primary">Cancel</button>
        <button type="submit" disabled={submitting} className="mdl-button mdl-button--accent">Save</button>
      </form>
    );

  }
  
}
