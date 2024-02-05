import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem 0 3rem;

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.colors['base-background']} 0%,
      ${theme.colors['base-profile']} 100%
    );
  `};
`
