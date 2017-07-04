import * as React from 'react';
import * as BlockTypeActions from '../../actions/blocktypes';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { blockTypeFields } from '../../reducers/blocktypes/model';
import { BlockTypesHeader, ContentItem, CreateItem } from '../../components';
import { Interfaces } from './interfaces';

@connect(mapStateToProps, mapDispatchToProps)
export class BlockTypesContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { blockTypes, actions, children } = this.props;
    const blockTypeCount = Object.keys(blockTypes).length;

    return (
      <section>
        <BlockTypesHeader />
        <ul>
          {Object.keys(blockTypes).map(function(blockTypeId, index){
              return (
                <li key={index}>
                  <ContentItem 
                    itemId={blockTypeId} 
                    itemData={blockTypes[blockTypeId]} 
                    editAction={actions.editBlockType} 
                    deleteAction={actions.deleteBlockType} />
                </li>
              )
            })}
        </ul>
        <CreateItem createAction={actions.addBlockType} fields={blockTypeFields} />
      </section>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    blockTypes: state.blocktypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlockTypeActions as any, dispatch)
  };
}
