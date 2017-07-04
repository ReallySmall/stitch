import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
    blockTypes: any;
    actions: any;
  }

  export interface State {
    /* empty */
  }

}