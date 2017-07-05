import * as React from 'react';
import * as CreateActions from '../../actions/create';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { Header, Nav } from '../../components';
import { routes } from '../../routes';
import { Interfaces } from './interfaces';

@connect(mapStateToProps, mapDispatchToProps) // ES7 decorator connects App to store with react-redux
export class App extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {
    
    super(props, context);
    this.resetAll = this.resetAll.bind(this); // bind method
    this.sendState = this.sendState.bind(this); // bind method

  }

  resetAll() {

  	const { actions } = this.props;

  	if(confirm('Are you sure you want to start again? All input data will be deleted!')){
      actions.resetAll();
      this.props.history.push('/');
    }

  }

  sendState() {

  	const { state } = this.props;
  	const stateString = JSON.stringify(state);

  	alert(stateString);

  }

  render() {

    const { actions, processing, minDataEntered } = this.props;

    return (

      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <Nav />
            <button onClick={this.resetAll} className="mdl-button">Start over</button>        
            <button onClick={this.sendState} disabled={!minDataEntered} className="mdl-button mdl-button--raised mdl-button--accent">Stitch</button>
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
  	state: state,
    processing: state.create.processing,
    minDataEntered: state.create.minDataEntered
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CreateActions as any, dispatch)
  };
}
