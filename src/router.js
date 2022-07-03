import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@src/home/home';
import routes from '@src/routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => buildRouteElement(route))}
      </Routes>
    </BrowserRouter>
  );
};

function buildRouteElement({ path, name }){
  const Component = getViewComponentByRouteName(name);
  return (
    <Route
      path={path}
      element={<Component />}
      key={name}
    />
  );
}

function getViewComponentByRouteName(name){
  return { home: Home }[name];
}
