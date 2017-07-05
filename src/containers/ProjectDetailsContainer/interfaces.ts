import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
    projectDetails: any;
    actions: any;
  }

  export interface State {
    /* empty */
  }
  
}