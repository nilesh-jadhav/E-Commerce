import React from 'react';
import styled, { css } from 'react-emotion';

const HeaderComponent = styled('div')`
  width: 100%;
  height:100px;
  background-color: blue;
`
export default () => {
  return <HeaderComponent>Header</HeaderComponent>;
};