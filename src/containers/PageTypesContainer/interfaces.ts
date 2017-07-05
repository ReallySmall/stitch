import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
    pageTypes: any;
    actions: any;
    count: number;
  }

  export interface State {
    /* empty */
  }
  
}