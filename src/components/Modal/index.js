import React from 'react';
import { Transition } from 'react-transition-group';

import { Container } from './styles';
import Backdrop from '../Backdrop';
import Button from '../Button';

const Modal = props => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <div>
      <Backdrop show={props.show} clicked={props.closed} />
      <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
        <Container active={props.show}>
          <div>
            <div>{props.children}</div>
            <Button onClick={props.closed}>Ok</Button>
          </div>
        </Container>
      </Transition>
    </div>
  );
};

export default Modal;
