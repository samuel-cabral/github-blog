import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src="/left-rect.svg" alt="" />
      <img src="/logo.svg" alt="" width={128} height={128} />
      <img src="/right-rect.svg" alt="" />
    </Container>
  )
}
