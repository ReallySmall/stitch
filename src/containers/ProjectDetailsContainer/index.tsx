import * as React from 'react';
import * as ProjectDetailsActions from '../../actions/details';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { ProjectDetailsHeader, ContentItem } from '../../components';
import { Interfaces } from './interfaces';

@connect(mapStateToProps, mapDispatchToProps)
export class ProjectDetailsContainer extends React.Component<Interfaces.Props, Interfaces.State> {

  render() {

    const { projectDetails, actions } = this.props;

    return (
      <section>
        <ProjectDetailsHeader />
        {Object.keys(projectDetails).map(function(projectDetailId, index){
          return (
            <div key={index}>
              <ContentItem 
                itemId={projectDetailId} 
                itemData={projectDetails[projectDetailId]} 
                editAction={actions.editProjectDetails} />
            </div>
          )
        })}
      </section>
    );

  }
  
}

function mapStateToProps(state: RootState) {
  return {
    projectDetails: state.details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProjectDetailsActions as any, dispatch)
  };
}