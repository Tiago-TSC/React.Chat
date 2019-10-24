import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { FooterDiv, UserDiv, Input, Button, MessageDiv, TextArea } from './styles';
import UserService from "../../services/userService";

const Footer = props => {
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState('');
  const [inputEnable, setInputEnable] = useState(true);
  const [userButtonText, setUserButtonText] = useState('Confirmar');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [messageEnable, setMessageEnable] = useState(false);

  const userService = new UserService(dispatch);

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

      userService.add(inputValue);

    } else {
      setInputEnable(true);
      setMessageEnable(false);
      setInputValue('');
      setTextAreaValue('');
      setUserButtonText('Confirmar');

      userService.remove(inputValue);
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
