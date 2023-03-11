import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu}
];

export default routes;



