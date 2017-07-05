import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as classNames from 'classnames';
import * as style from './style.css';
import { FormContainer } from '../../containers/FormContainer';
import { Interfaces } from './interfaces';

export class ProjectDetails extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);
    this.state = {
      editing: false
    }
    this.startItemEdit = this.startItemEdit.bind(this); // bind method
    this.cancelItemEdit = this.cancelItemEdit.bind(this); // bind method
    this.saveItemEdit = this.saveItemEdit.bind(this); // bind method

  };

  startItemEdit(){

    this.setState({ editing: true });

  }

  cancelItemEdit(){

    this.setState({ editing: false });

  }

  saveItemEdit = (values) => {

    const { updateProjectDetails } = this.props;

    updateProjectDetails(values);
    this.setState({ editing: false });

  }

  render() {

    const { detailData } = this.props;
    const { fields } = detailData;
    let initialValues = {};

    {Object.keys(fields).map(function(fieldDatum, index){
      initialValues[fields[fieldDatum].name] = fields[fieldDatum].value; 
    })}

    return (
            
      <section>
        <h2>Project Details</h2>
        {!this.state.editing &&
          <div> 
            {Object.keys(fields).map(function(fieldDatum, index){
              const { label, value } = fields[fieldDatum];
              return (<p key={index}>{label}: {value}</p>)
            })}
            <footer>
              <button onClick={this.startItemEdit}>Edit</button>
            </footer>
          </div>
        }
        {this.state.editing && 
          <FormContainer onSubmit={this.saveItemEdit} cancelSubmit={this.cancelItemEdit} fieldData={fields} initialValues={initialValues} />
        }
      </section>

    );

  }
}
