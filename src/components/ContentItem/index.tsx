import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { FormContainer } from '../../containers/FormContainer';
import { Interfaces } from './interfaces';

export class ContentItem extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);
    this.state = {
      editing: false
    }
    this.deleteItem = this.deleteItem.bind(this); // bind method
    this.startItemEdit = this.startItemEdit.bind(this); // bind method
    this.cancelItemEdit = this.cancelItemEdit.bind(this); // bind method
    this.saveItemEdit = this.saveItemEdit.bind(this); // bind method

  }

  deleteItem(event){

    const { itemData, itemId, deleteAction } = this.props;

    if(confirm('Are you sure you want to delete this?')){
      deleteAction(itemId);
    }

  }

  startItemEdit(){

    this.setState({ editing: true });

  }

  saveItemEdit = (values) => {

    const { itemData, itemId, editAction } = this.props;

    editAction(itemId, values);
    this.setState({ editing: false });

  }

  cancelItemEdit(){

    this.setState({ editing: false });

  }

  render() {

  	const { itemData, deleteAction, editAction } = this.props;
    const { fields } = itemData;
    let initialValues = {};

    {Object.keys(fields).map(function(fieldDatum, index){
      initialValues[fields[fieldDatum].name] = fields[fieldDatum].value; 
    })}

    return (

      <div>
        <h3>{itemData.name}</h3>
        {!this.state.editing &&
          <div> 
            {Object.keys(fields).map(function(fieldDatum, index){
              const { label, value } = fields[fieldDatum];
              return (<p key={index}>{label}: {value}</p>)
            })}
            <footer>
              {deleteAction && <button onClick={this.deleteItem}>Delete</button>}
              {editAction && <button onClick={this.startItemEdit}>Edit</button>}
            </footer>
          </div>
        }
        {this.state.editing && 
          <FormContainer onSubmit={this.saveItemEdit} cancelSubmit={this.cancelItemEdit} fieldData={fields} initialValues={initialValues} />
        }
      </div>

    );

  }
}
