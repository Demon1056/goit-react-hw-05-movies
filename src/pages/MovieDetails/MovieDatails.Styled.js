import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-item: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid grey;
  width: 290px;
  :hover,
  :focus {
    background-color: rosybrown;
  }
`;
