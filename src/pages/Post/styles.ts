import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const PostHeader = styled.header`
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5rem;

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 2rem;
    color: ${({ theme }) => theme.colors['base-span']};
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  color: ${({ theme }) => theme.colors['base-text']};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors['base-title']};
    margin: 1.5rem 0 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
  }

  img {
    max-width: 100%;
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
`
