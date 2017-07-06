/* Container components are passed data from the central redux store using react-redux, when it is updated by an action from anywhere in the application */

import * as React from 'react';
import * as BlockTypeActions from '../../actions/blocktypes';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { blockTypeFields } from '../../reducers/blocktypes/model';
import { BlockTypesHeader, ContentItem, CreateItem } from '../../components';
import { Interfaces } from './interfaces';

@connect(mapStateToProps, mapDispatchToProps) // ES7 decorator
export class BlockTypesContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { blockTypes, actions, children } = this.props;
    const blockTypeCount = Object.keys(blockTypes).length;

    return (
      <section>
        <BlockTypesHeader />
        {!blockTypeCount && <p>No block types created yet.</p>}
        <ul className="list-unstyled">
          {Object.keys(blockTypes).map(function(blockTypeId, index){
              return (
                <li key={index}>
                  <ContentItem 
                    itemTitle='Block Type'
                    itemId={blockTypeId} 
                    itemData={blockTypes[blockTypeId]} 
                    editAction={actions.editBlockType} 
                    deleteAction={actions.deleteBlockType} />
                </li>
              )
            })}
        </ul>
        <CreateItem createAction={actions.addBlockType} fields={blockTypeFields().fields} />
      </section>
    );
  }
}

// When the blocktypes portion of the redux state is updated
// this react-redux function passes the updated state into the container component via the defined props
function mapStateToProps(state: RootState) {
  return {
    blockTypes: state.blocktypes
  };
}

// This react-redux function binds action creators to dispatch functions
// which are passed into the container component via the defined props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlockTypeActions as any, dispatch)
  };
}
