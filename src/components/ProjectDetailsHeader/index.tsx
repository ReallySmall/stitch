import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export class ProjectDetailsHeader extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);

  };

  render() {

    return (
            
      <div>
        <h2>Project Details</h2>
      </div>

    );

  }
}
