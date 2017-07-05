import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { NavLink } from 'react-router-dom';
import { Interfaces } from './interfaces';

const cx = classNames.bind(style);

export class Home extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);

  };

  render() {

    return (
            
      <div>
        <h2>Home</h2>
        <p>Introductory preamble</p>
        <NavLink to='/project-details' className="mdl-button mdl-button--raised mdl-button--accent">Get started</NavLink>
      </div>

    );

  }
}
