import React, { useState } from 'react';
import styled from 'styled-components';
import { enabled } from 'ansi-colors';

const FooterDiv = styled.div`
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

const UserDiv = styled.div`
  float: left;
  margin: 0;
  width: 20%;
`;

const MessageDiv = styled.div`
  float: left;
  margin: 0;
  width: 70%;
`;

const SendDiv = styled.div`
  float: left;
  margin: 0;
  width: 10%;
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

const TextArea = styled.textarea`
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

const Footer = props => {
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputEnable, setInputEnable] = useState(true);
  const [userButtonText, setUserButtonText] = useState('Confirmar');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [messageEnable, setMessageEnable] = useState(false);

  const inputChangedHandler = event => {
    setInputValue(event.target.value);
  };

  const userNameHandler = () => {
    if (inputValue === '') {
      alert('Digite no nome do usuário.');
      return;
    }

    setUserName(inputValue);

    if (userButtonText === 'Confirmar') {
      setInputEnable(false);
      setMessageEnable(true);
      setUserButtonText('Cancelar');
    } else {
      setInputEnable(true);
      setMessageEnable(false);
      setUserName('');
      setInputValue('');
      setTextAreaValue('');
      setUserButtonText('Confirmar');
    }
  };

  const textAreaChangedHandler = event => {
    setTextAreaValue(event.target.value);
  };

  return (
    <FooterDiv>
      <UserDiv>
        <Input
          placeholder="Nome do usuário"
          value={inputValue}
          onChange={event => inputChangedHandler(event)}
          disabled={!inputEnable}
        />
        <Button onClick={userNameHandler}>{userButtonText}</Button>
      </UserDiv>
      <MessageDiv>
        <TextArea value={textAreaValue} onChange={textAreaChangedHandler} disabled={!messageEnable}>
          {props.message}
        </TextArea>
      </MessageDiv>
      <SendDiv>
        <Button disabled={!messageEnable}>Enviar</Button>
      </SendDiv>
    </FooterDiv>
  );
};

export default Footer;
