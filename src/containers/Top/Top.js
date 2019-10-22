import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  flex-basis: 20%;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #d50000;
  text-align: center;
`;

const Title = styled.p`
  color: #fff;
  font-family: sans-serif, Arial;
  font-weight: bold;
`;

const footer = props => {
  return (
    <StyledDiv>
      <Title>Chat Online</Title>
    </StyledDiv>
  );
};

export default footer;
