import styled from 'styled-components';

export const ButtonStyled = styled.button`
  flex-basis: auto;
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