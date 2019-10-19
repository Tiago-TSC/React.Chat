import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ef9a9a;
  color: #fff;
  text-align: left;
  border-top: 2px solid #000;
  padding: 10px;
  font-family: sans-serif, Arial;
`;

const Input = styled.input`
  outline: none;
  font-family: inherit;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #966909;
  padding: 3px 5px;
  width: 150px;
  height: 30px;
`;

const Button = styled.button`
  font-family: inherit;
  border: none;
  margin: 7px;
  padding: 3px 5px;
  width: 90px;
  height: 30px;
  color: #fff;
  background-color: #f44336;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 2px 2px 2px #966909;
  border-radius: 5px;

  :focus {
    outline: none;
  }

  :hover,
  active {
    color: #fff;
    background-color: #d50000;
  }

  :active {
    box-shadow: 0px 0px 2px #fff;
  }
`;

const footer = props => {
  return (
    <StyledDiv>
      <Input placeholder="Nome do usuário" />
      <Button>Confirmar</Button>
    </StyledDiv>
  );
};

export default footer;
