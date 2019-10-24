import styled from 'styled-components';

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 270px;
`;

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
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
