import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export class PageTypesHeader extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    super(props, context);
  }

  render() {

  	const { count, children } = this.props;

    return (

        <div>
          <h2>Page Types</h2>
      	</div>

    );

  }
}
