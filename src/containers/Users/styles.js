import styled from 'styled-components';

export const ListDiv = styled.div`
  margin: 10px;
  padding: 10px;
  border: 2px solid;
  border-radius: 10px;
  width: 175px;
  background-color: #ffebee;
`;

export const UserGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;

export const UserItem = styled.li`
  margin: 2px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-bottom: 1px solid #000;
`;
