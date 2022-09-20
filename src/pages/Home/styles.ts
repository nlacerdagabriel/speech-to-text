import styled from "styled-components";
import { theme } from "../../theme";

interface IProps {
  audiourlIsEmpty: boolean;
}

export const Container = styled.section`
  padding: 3rem;
  background-color: ${theme.colors.white};
  max-width: ${theme.sizes.container};
  margin: 0 auto;

  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;


  h1{
    color: ${theme.colors.primary};
    font-weight: 500;
  }

  input{
    border: none;
    border-bottom: 1px solid ${theme.colors.secondary};

    color: ${theme.colors.secondary};
    font-size: 1rem;

    padding-bottom: 0.5rem;
    margin: 3rem 0;

    width: 100%;
    outline: none;



    &::placeholder{
      color: ${theme.colors.secondary};
    }
  }

  button{
    border: none;
    padding: 1rem 0;

    width: 10rem;

    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    
    border-radius: 0.5rem;

    transition: 0.3s;

    cursor:  ${(props: IProps) => props.audiourlIsEmpty ? 'not-allowed' : 'pointer'};
    opacity: ${(props: IProps) => props.audiourlIsEmpty ? 0.6 : 1};

    &:hover{
      background-color: #003E1F;
    }
  }

  p{
    width: 100%;
    margin-top: 3rem;
  }
`