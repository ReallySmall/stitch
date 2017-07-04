import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props {
  	details: any;
  	updateProjectDetails: any;
  }

  export interface State {
  	domain: string;
  	httpsOnly: boolean;
  }

}