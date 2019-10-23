import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FooterDiv, UserDiv, Input, Button, MessageDiv, TextArea } from './styles';
import * as actions from '../../store/actions';

const Footer = props => {
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

    if (userButtonText === 'Confirmar') {
      setInputEnable(false);
      setMessageEnable(true);
      setUserButtonText('Cancelar');
      props.onAddUser(inputValue);
    } else {
      setInputEnable(true);
      setMessageEnable(false);
      setInputValue('');
      setTextAreaValue('');
      setUserButtonText('Confirmar');
      props.onRemoveUser(inputValue);
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

const mapStateToProps = state => {
  return {
    onlineUsers: state.users.onlineUsers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: userName => dispatch(actions.addUser(userName)),
    onRemoveUser: userName => dispatch(actions.removeUser(userName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
