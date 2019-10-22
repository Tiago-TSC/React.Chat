import styled from 'styled-components';

export const FooterDiv = styled.div`
  display: flex;
  background-color: #ef9a9a;
  color: #fff;
  text-align: left;
  border-top: 2px solid #000;
  padding: 10px;
  font-family: sans-serif, Arial;
  height: 70px;
`;

export const UserDiv = styled.div`
  float: left;
  margin: 0;
  width: 20%;
`;

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  margin: 0;
  width: 70%;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

export const TextArea = styled.textarea`
  flex: 1;
  outline: none;
  font-family: inherit;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #966909;
  padding: 3px 5px;
  width: 100%;
  height: 50px;
  resize: none;
`;
