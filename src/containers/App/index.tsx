import * as React from 'react';
import * as CreateActions from '../../actions/create';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { ProjectDetailsContainer, PageTypesContainer, BlockTypesContainer } from '../../containers';
import { Header, Nav, Home } from '../../components';
import { routes } from '../../routes';
import { Interfaces } from './interfaces';

@connect(mapStateToProps, mapDispatchToProps) // ES7 decorator connects App to store with react-redux
export class App extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    
    super(props, context);
    this.resetAll = this.resetAll.bind(this); // bind method

  }

  resetAll() {

  	const { actions } = this.props;

  	if(confirm('Are you sure you want to start again? All input data will be deleted!')){
      actions.resetAll();
      this.props.history.push('/');
    }

  }

  render() {

    const { actions, processing, details, pagetypes, blocktypes, children } = this.props;

    return (

      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <Nav />
            <button onClick={this.resetAll}>Start over</button>        
            <button>Stitch</button>
          </div>
          <main className="col-md-8">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.view}
              />
            ))}
          </main>
        </div>
      </div>
      
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    processing: state.create.processing,
    details: state.details,
    pagetypes: state.pagetypes,
    blocktypes: state.blocktypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CreateActions as any, dispatch)
  };
}
