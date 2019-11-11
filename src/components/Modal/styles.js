import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 200;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  color: #000;
  background-color: #fff;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  top: 30%;
  left: 37.5%;
  width: 25%;
  transition: all 0.3s ease-out;
  animation: ${props => (props.active ? 'openModal 0.4s' : 'closeModal 1s')} ease-out forwards;

  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    50% {
      opacity: 1;
      transform: translateY(90%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes closeModal {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.8;
      transform: translateY(-60%);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`;