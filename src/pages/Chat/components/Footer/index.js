import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FooterDiv, UserDiv, Input, MessageDiv, TextArea } from './styles';
import UsersService from '../../../../services/UsersService';
import MessagesService from '../../../../services/MessagesService';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';

const Footer = props => {
  const dispatch = useDispatch();

  const connectedUser = useSelector(({ users }) => users.connectedUser);

  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputEnable, setInputEnable] = useState(true);
  const [userButtonText, setUserButtonText] = useState('Confirmar');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [messageEnable, setMessageEnable] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const textAreaRef = useRef(null);

  const usersService = new UsersService(dispatch);
  const messagesService = new MessagesService(dispatch);

  useEffect(() => {
    textAreaRef.current.focus();
  }, [userName, textAreaValue]);

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
      setModalIsOpen(true);
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

      usersService.remove(connectedUser.id);
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

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <FooterDiv>
      <Modal show={modalIsOpen} closed={closeModal}>
        Digite o nome do usuário.
      </Modal>
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
          ref={textAreaRef}
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
