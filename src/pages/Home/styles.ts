import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`
