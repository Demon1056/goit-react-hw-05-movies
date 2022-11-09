import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
padding: 20px;

`;
export const Header = styled.header`
display: flex;
 border-bottom: 1px solid grey;
 box-shadow: 0px 1px  grey;
`

export const HeaderText = styled.p`
font-size: 20px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid grey;
    :not(:last-child) {
    margin-right:10px;
    }
    
    
`