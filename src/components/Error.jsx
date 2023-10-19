import React from 'react'
import styled from 'styled-components';

const Error = () => {
  return (
    <div>
      <ErrorMessage>Något gick fel när sidan laddades :(</ErrorMessage>
    </div>
  )
}

const ErrorMessage = styled.h1`
  color: white;
  text-align: center;
`;

export default Error
