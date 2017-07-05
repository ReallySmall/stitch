import { HomeContainer, ProjectDetailsContainer, PageTypesContainer, BlockTypesContainer } from './containers/';

export const routes = [
  { 
    path: '/',
    exact: true,
    view: HomeContainer,
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
    description: 'Specify the core attributes of an EPiServer site'
  },
  { 
    path: '/page-types',
    exact: true,
    view: PageTypesContainer,
    inNav: true,
    title: 'Page Types',
    description: 'Define page types for your site and the properties they will have'
  },
  { 
    path: '/block-types',
    exact: true,
    view: BlockTypesContainer,
    inNav: true,
    title: 'Block Types',
    description: 'Define block types for your site and the properties they will have'
  }
];


