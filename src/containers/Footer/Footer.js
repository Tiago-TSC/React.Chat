import React, { useState } from 'react';
import { FooterDiv, UserDiv, Input, Button, MessageDiv, TextArea } from './styles'

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
      alert('Digite o nome do usuário.');
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
        <Button disabled={!messageEnable}>Enviar</Button>
      </MessageDiv>
    </FooterDiv>
  );
};

export default Footer;
