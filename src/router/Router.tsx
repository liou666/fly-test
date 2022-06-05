import { lazy, Suspense, useState } from 'react';
import { Outlet, useNavigate, useLocation, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/views/Index'));
const Foo = lazy(() => import('~/views/Foo'));

function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="text-gray-500">
      <div className="text-center">{pathname}</div>
      <div className="text-center">
        <button onClick={(e) => navigate('/')} className="m-2 bg-green-200 px-3 py-1 rounded-md ">
          /index
        </button>
        <button onClick={(e) => navigate('/foo')} className="bg-green-200 px-2 py-1 rounded-md">
          /foo
        </button>
      </div>
      <hr />
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <IndexScreen />,
        },
        {
          path: '/foo',
          element: <Foo />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
