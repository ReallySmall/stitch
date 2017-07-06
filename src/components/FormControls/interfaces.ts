import { RouteComponentProps } from 'react-router';

export namespace Interfaces {

  export interface Props extends RouteComponentProps<void> {
    fieldData: any,
    initialValues?: any,
    handleSubmit: any,
    cancelSubmit: any,
    submitting: boolean
  }

  export interface State {
    /* empty */
  }
  
}