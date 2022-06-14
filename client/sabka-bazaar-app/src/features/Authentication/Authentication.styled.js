import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  h2 {
    margin: 10px 0;
  }

  & > * {
    padding: 2em;
  }
`;

export const Note = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
