import * as React from 'react';
import * as classNames from 'classnames/bind';
import * as style from './style.css';
import { applyMiddleware } from 'redux';
import { routes } from '../../routes';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { NavLink } from 'react-router-dom';
import { Interfaces } from './interfaces';

const cx = classNames.bind(style);

export class Nav extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    super(props, context);
  }

  render() {

    const {} = this.props;

    return (

      <nav className={cx(style.nav)}>
        <h3 className={cx(style.hidden)}>Nav</h3>
        <ul className="list-group unstyled">
          {routes.map(function(route, index){
            if(route.inNav){
              return (
                <li key={index}>
                  <NavLink 
                    to={route.path} 
                    className={cx('list-group-item')}
                    activeClassName='active'>
                    {route.title} {route.description}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </nav>

    );

  }
}
