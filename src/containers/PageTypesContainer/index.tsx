import * as React from 'react';
import * as PageTypeActions from '../../actions/pagetypes';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { PageTypesHeader, ContentItem, CreateItem } from '../../components';
import { Interfaces } from './interfaces';

@connect(mapStateToProps, mapDispatchToProps)
export class PageTypesContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  constructor(props?: Interfaces.Props, context?: any) {

    super(props, context);

  };

  render() {

    const { pageTypes, actions, children } = this.props;
    const pageTypeCount = Object.keys(pageTypes).length;
    const newPageTypeFields = {
      name: { 
        type: 'text',
        name: 'name', 
        label: 'Page Type', 
        value: '',
        validators: []
      },
      description: { 
        type: 'text',
        name: 'description', 
        label: 'Description', 
        value: '',
        validators: []
      }
    };

    return (
      <section>
        <PageTypesHeader />
        <ul>
          {Object.keys(pageTypes).map(function(pageTypeId, index){
            return (
              <li key={index}>
                <ContentItem 
                  itemId={pageTypeId} 
                  itemData={pageTypes[pageTypeId]} 
                  editAction={actions.editPageType} 
                  deleteAction={actions.deletePageType} />
              </li>
            )
          })}
        </ul>
        <CreateItem createAction={actions.addPageType} fields={newPageTypeFields} />
      </section>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    pageTypes: state.pagetypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PageTypeActions as any, dispatch)
  };
}
