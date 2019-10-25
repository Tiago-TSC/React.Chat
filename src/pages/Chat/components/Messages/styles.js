import styled from 'styled-components';

export const MessageGroup = styled.div`
  margin: 10px;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid;
`;

export const UserName = styled.div`
  font-family: inherit;
  font-weight: bold;
  color: #283593;
`;

export const DateTime = styled.div`
  font-family: inherit;
  font-size: small;
  margin-left: 4px;
`;

export const Text = styled.div`
  padding: 5px;
  font-family: inherit;
`;
