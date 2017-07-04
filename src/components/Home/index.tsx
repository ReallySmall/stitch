import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { BindFieldsToState } from '../../helpers';
import { Interfaces } from './interfaces';

export class Home extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);

  };

  render() {

    return (
            
      <section>
        <h2>Home</h2>
        <p>Intro text</p>
      </section>

    );

  }
}
