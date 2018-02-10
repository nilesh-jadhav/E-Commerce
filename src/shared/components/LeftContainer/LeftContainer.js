import React from 'react';
import styled, { css } from 'react-emotion';

const LeftComponent = styled('div')`
  width: 20%;
  background-color: gray;
  flex: .2;
`

export default () => {
  return <LeftComponent>LeftContainer</LeftComponent>;
};