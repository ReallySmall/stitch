import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export class BlockTypesHeader extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    super(props, context);
  }

  render() {

    return (
      
      <div>
        <h2>Block Types</h2>
      </div>

    );

  }
}
