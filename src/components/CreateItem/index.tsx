import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { FormContainer } from '../../containers/FormContainer';
import { Interfaces } from './interfaces';

export class CreateItem extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);
    this.state = {
      creating: false
    }
    this.startItemCreate = this.startItemCreate.bind(this); // bind method
    this.cancelItemCreate = this.cancelItemCreate.bind(this); // bind method
    this.saveItemCreate = this.saveItemCreate.bind(this); // bind method

  }

  startItemCreate(){

    this.setState({ creating: true });

  }

  saveItemCreate = (values) => {

    const { createAction } = this.props;

    createAction(values);
    this.setState({ creating: false });

  }

  cancelItemCreate(){

    this.setState({ creating: false });

  }

  render() {

    const { fields } = this.props;

    return (

      <footer>
        {!this.state.creating &&
          <button autoFocus onClick={this.startItemCreate} className="mdl-button mdl-button--raised mdl-button--accent">Add</button>
        }
        {this.state.creating && 
          <FormContainer onSubmit={this.saveItemCreate} cancelSubmit={this.cancelItemCreate} fieldData={fields} />
        }
      </footer>

    );

  }
}
