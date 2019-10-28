import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => (props.active ? 'block' : 'none')};
`;
