import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FooterDiv, UserDiv, Input, MessageDiv, TextArea } from './styles';
import UsersService from '../../../../services/UsersService';
import MessagesService from '../../../../services/MessagesService';
import Button from '../../../../components/Button';

const Footer = props => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputEnable, setInputEnable] = useState(true);
  const [userButtonText, setUserButtonText] = useState('Confirmar');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [messageEnable, setMessageEnable] = useState(false);

  const usersService = new UsersService(dispatch);
  const messagesService = new MessagesService(dispatch);

  const inputKeyPressHandler = event => {
    if (event.key === 'Enter') {
      userNameHandler();
    }
  };

  const inputChangedHandler = event => {
    setInputValue(event.target.value);
  };

  const userNameHandler = () => {
    if (inputValue === '') {
      alert('Digite o nome do usuário.');
      return;
    }

    if (userButtonText === 'Confirmar') {
      setInputEnable(false);
      setMessageEnable(true);
      setUserButtonText('Cancelar');
      setUserName(inputValue);

      usersService.add(inputValue);
    } else {
      setInputEnable(true);
      setMessageEnable(false);
      setInputValue('');
      setTextAreaValue('');
      setUserButtonText('Confirmar');
      setUserName('');

      usersService.remove(inputValue);
    }
  };

  const textAreaChangedHandler = event => {
    setTextAreaValue(event.target.value);
  };

  const sendMessage = () => {
    if (textAreaValue !== '') {
      messagesService.send(userName, textAreaValue);
      setTextAreaValue('');
    }
  };

  const textAreaKeyPressHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }

    event.key = null;
  };

  return (
    <FooterDiv>
      <UserDiv>
        <Input
          placeholder="Nome do usuário"
          value={inputValue}
          onChange={event => inputChangedHandler(event)}
          onKeyPress={event => inputKeyPressHandler(event)}
          disabled={!inputEnable}
        />
        <Button onClick={userNameHandler}>{userButtonText}</Button>
      </UserDiv>
      <MessageDiv>
        <TextArea
          value={textAreaValue}
          onChange={textAreaChangedHandler}
          onKeyPress={event => textAreaKeyPressHandler(event)}
          disabled={!messageEnable}
        >
          {props.message}
        </TextArea>
        <Button onClick={sendMessage} disabled={!messageEnable}>
          Enviar
        </Button>
      </MessageDiv>
    </FooterDiv>
  );
};

export default Footer;
