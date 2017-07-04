import * as React from 'react';
import { Field } from 'redux-form';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export class Form extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);

  };

  render() {

    const { handleSubmit } = this.props;

    return (
            
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="domain-name">Site Domain</label>
          <Field name="domain" component="input" type="text" />
        </div>
        <div className="form-group">
          <input type="checkbox" id="project-https" name="httpsOnly" checked={this.state.httpsOnly} onClick={this.handleChange} />
          <label htmlFor="project-https">HTTPS only?</label>
        </div>
        <div className="form-group">
          <button type="submit">Done</button>
        </div>
      </form>

    );

  }
}
