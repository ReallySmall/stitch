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

    const { contentCounts } = this.props;

    return (

      <nav className={cx(style.nav)}>
        <h3 className={cx(style.hidden)}>Nav</h3>
        <ul className="mdl-list">
          {routes.map(function(route, index){
            const count = contentCounts[route.contentCount];
            if(route.inNav){
              return (
                <li key={index} className="mdl-list__item mdl-list__item--three-line">
                  <NavLink to={route.path} activeClassName={cx(style['active'])} className={cx(style['nav-link'])}>
                    <span className="mdl-list__item-primary-content">
                      <span>
                        {route.title} 
                        {count > 0 && <span className="mdl-badge" data-badge={count}></span>}
                      </span>
                      <span className="mdl-list__item-text-body">
                        {route.description}
                      </span>
                    </span>
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
