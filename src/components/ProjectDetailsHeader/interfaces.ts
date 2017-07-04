import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props {
  	detailData: any;
  	updateProjectDetails: any;
  }

  export interface State {
  	editing: boolean;
  }

}