import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-span']};
  }
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['base-title']};
  flex: 1;
  margin-right: 1rem;
`

export const Summary = styled.p`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1rem;
  line-height: 1.6;
`
