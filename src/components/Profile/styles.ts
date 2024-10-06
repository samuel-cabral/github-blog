import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -5rem;
  gap: 2rem;
`

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;

  span {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 0.875rem;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors['base-label']};
`

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  font-weight: bold;
  font-size: 0.75rem;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
