import { formatDistanceToNow } from 'date-fns'
import { Container, Title, Summary, PostInfo } from './styles'

interface PostCardProps {
  title: string
  body: string
  createdAt: string
  number: number
}

export function PostCard({ title, body, createdAt, number }: PostCardProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  })

  return (
    <Container to={`/post/${number}`}>
      <PostInfo>
        <Title>{title}</Title>
        <span>{formattedDate}</span>
      </PostInfo>
      <Summary>{body.substring(0, 200)}...</Summary>
    </Container>
  )
}
