import styled from 'styled-components'

export const Container = styled.form`
  margin-top: 4.5rem;
`

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h2 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-span']};
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors['base-error']};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
`
