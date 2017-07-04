import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props {
  	itemId: number;
  	itemData: any;
  	deleteAction: any;
  	editAction: any;
  }

  export interface State {
  	editing: boolean;
  }

}