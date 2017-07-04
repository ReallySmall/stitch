import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { Interfaces } from './interfaces';

export class Header extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <header className="">
        <h1>Stitch</h1>
        <h2></h2>
        <p></p>
      </header>
    );
  }
}
