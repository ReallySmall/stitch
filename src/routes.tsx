import { ProjectDetailsContainer, PageTypesContainer, BlockTypesContainer } from './containers/';
import { Home } from './components/';

export const routes = [
  { 
    path: '/',
    exact: true,
    view: Home,
    inNav: false,
    title: '',
    description: ''
  },
  { 
    path: '/project-details',
    exact: true,
    view: ProjectDetailsContainer,
    inNav: true,
    title: 'Project Details',
    description: 'test'
  },
  { 
    path: '/page-types',
    exact: true,
    view: PageTypesContainer,
    inNav: true,
    title: 'Page Types',
    description: 'test'
  },
  { 
    path: '/block-types',
    exact: true,
    view: BlockTypesContainer,
    inNav: true,
    title: 'Block Types',
    description: 'test'
  }
];