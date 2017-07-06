import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props {
  	itemId: number;
    itemTitle: string;
  	itemData: any;
  	deleteAction: any;
  	editAction: any;
  	onSubmit: any;
  }

  export interface State {
  	editing: boolean;
  }

}