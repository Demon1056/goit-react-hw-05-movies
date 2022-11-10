import styled from 'styled-components';

export const Form = styled.form`
padding:2px;
margin-top:5px;
display: flex;
align-items: center;
max-width: 320px;
border: 2px solid black;
border-radius: 3px;
`;
export const FormButton = styled.button`
  
display: inline-block;
background-color: rosybrown;

  width: 65px;
  height: 25px;
  border: 4px;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 1px solid black;
  border-radius: 3px;
  :hover {
    opacity: 0.5;
  }
`;
// export const SearchFormButtonLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;
export const FormInput = styled.input` 

display: inline-block;
  margin-right: 5px;
  width: 100%;
  font: inherit;
  font-size: 17px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
border: 1px solid rosybrown;
  border-radius: 3px;
`;