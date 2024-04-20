import { RouteObject } from 'react-router-dom';

import MainPage from './MainPage';
import AddRecordPage from './AddRecordPage';

export const routesPaths = {
  main: '/',
  addRecord: '/add-record',
};

export const routes: RouteObject[] = [
  {
    path: routesPaths.main,
    element: <MainPage />,
  },
  {
    path: routesPaths.addRecord,
    element: <AddRecordPage />,
  },
];
