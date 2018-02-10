import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import styled, { css } from 'react-emotion';

const RightComponent = styled('div')`
  width: 80%;
  flex: 1;
`

export default () => {
  return (
    <RightComponent>
      <div>RightContainer</div>
      <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
    </RightComponent>
  )
};