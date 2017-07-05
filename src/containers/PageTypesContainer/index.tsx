import * as React from 'react';
import * as PageTypeActions from '../../actions/pagetypes';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { pageTypeFields } from '../../reducers/pagetypes/model';
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

    return (
      <section>
        <PageTypesHeader />
        {!pageTypeCount && <p>No page types created yet.</p>}
        <ul className="list-unstyled">
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
        <CreateItem createAction={actions.addPageType} fields={pageTypeFields().fields} />
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
