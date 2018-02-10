import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import LeftContainer from '../shared/components/LeftContainer';
import RightContainer from '../shared/components/RightContainer';
import Header from '../shared/components/Header';

const ContainerComponent = styled('div')`
  width: 100%;
  min-height:600px;
  display: flex;
`

export default () => {
  return (
    <div>
      <Header/>
      <Link to="/">Home</Link>
      <Link to="/movie/23">movie</Link>
      <ContainerComponent>
        <LeftContainer/>
        <RightContainer/>
      </ContainerComponent>

    </div>
  );
};
