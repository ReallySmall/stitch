import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
  	processing: boolean;
    minDataEntered: boolean;
  	actions: any;
  }

  export interface State {
    /* empty */
  }
  
}