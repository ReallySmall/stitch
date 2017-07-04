import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
    details: any;
    actions: any;
    handleSubmit: any;
  }

  export interface State {
    /* empty */
  }
  
}