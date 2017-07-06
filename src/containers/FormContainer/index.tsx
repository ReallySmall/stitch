import * as React from 'react';
import * as ProjectDetailsActions from '../../actions/details';
import { renderTextField, renderCheckboxField} from '../../components/FormControls';
import { reduxForm, Field } from 'redux-form'
import { RootState } from '../../reducers';
import * as style from './style.css';
import { Interfaces } from './interfaces';

const validationTypes = { // form field validation methods - TODO import this from a seperate module
  required: value => (value ? undefined : 'Required') // does the field need a value?
}

@reduxForm({ form: 'edit'})
export class FormContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { fieldData, initialValues, handleSubmit, cancelSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
          <article className="mdl-card mdl-shadow--2dp">
            <div className={style['form-field-wrapper']}>

              {Object.keys(fieldData).map(function(fieldDatum, index){
                
                const { name, type, label, validators } = fieldData[fieldDatum];
                const fieldRenderer = type === 'checkbox' ? renderCheckboxField : renderTextField; // TODO - make this MUCH more generic
                const validate = validators.map(function(validationType){ // Convert array to validation method label strings to function references
                  if(validationTypes[validationType]){ // if a corresponding validation method exists
                    return validationTypes[validationType] // add it as a test to run against this control whenver it is updated
                  }
                });

                return (<Field key={index} name={name} type={type} label={label} index={index} component={fieldRenderer} validate={validate} />)

              })}

            </div>
            <footer className="mdl-card__actions">
              <button onClick={cancelSubmit} disabled={submitting} className="mdl-button mdl-button--primary">Cancel</button>
              <button type="submit" disabled={submitting} className="mdl-button mdl-button--accent">Save</button>
            </footer>
          </article>
      </form>
    );

  }
  
}
