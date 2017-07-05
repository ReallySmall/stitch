import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export class BlockTypes extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    super(props, context);
  }

  render() {

    const { children } = this.props;

    return (
      
      <section>
        <h2>Block Types</h2>
        <ul>
          {children}
        </ul>
      </section>

    );

  }
}
