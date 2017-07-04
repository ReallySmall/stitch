import create from './create/';
import details from './details/';
import pagetypes from './pagetypes/';
import blocktypes from './blocktypes/';

export namespace Interfaces {

  export interface RootState {
  	create: CreateStoreState;
  	details: ProjectDetailsStoreState;
  	pagetypes: PageTypeStoreState;
  	blocktypes: BlockTypeStoreState;
  }

}