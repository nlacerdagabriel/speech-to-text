import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.header`
  max-width: ${theme.sizes.container};
  margin: 0 auto;

  padding: 2rem;
  margin-bottom: 3rem;

  border-bottom: 3px solid ${theme.colors.primary};
  color: ${theme.colors.secondary};
  font-size: 1.7rem;

  text-align: center;

  background-color: ${theme.colors.white};

  span{
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`