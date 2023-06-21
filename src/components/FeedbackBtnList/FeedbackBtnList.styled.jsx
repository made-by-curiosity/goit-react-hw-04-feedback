import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  margin-bottom: 20px;

  display: flex;
  gap: 10px;
`;

export const FeebackBtn = styled.button`
  width: 100px;
  padding: 5px;

  border: 1px solid gray;
  border-radius: 8px;

  &:hover,
  &:focus {
    background-color: #aaa;
  }

  &:active {
    background-color: grey;
  }
`;
