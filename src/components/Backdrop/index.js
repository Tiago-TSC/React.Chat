import React from 'react';

import { Container } from './styles';

const Backdrop = props => {
  return <Container active={props.show} onClick={props.clicked} />;
};

export default Backdrop;
