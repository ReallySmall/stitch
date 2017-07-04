import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props {
  	fields: any;
  	createAction: any;
  }

  export interface State {
  	creating: boolean;
  }

}