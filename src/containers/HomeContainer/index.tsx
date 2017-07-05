import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { Home } from '../../components';
import { Interfaces } from './interfaces';

@connect(mapStateToProps)
export class HomeContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { create } = this.props;

    return (
      <section>
        <Home />
      </section>
    );

  }
  
}

function mapStateToProps(state: RootState) {
  return {
    create: state.create
  };
}