import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
  	processing: boolean;
  	actions: any;
  	details: any;
  	pagetypes: any;
  	blocktypes: any;
  }

  export interface State {
    /* empty */
  }
  
}