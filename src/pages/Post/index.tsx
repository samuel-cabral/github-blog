import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import { Container, PostHeader, PostContent } from './styles'
import { api } from '@lib/axios'

interface PostData {
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  html_url: string
}

const fetchPost = async (number: string): Promise<PostData> => {
  const { data } = await api.get<PostData>(
    `https://api.github.com/repos/samuel-cabral/github-blog/issues/${number}`,
  )
  return data
}

export function Post() {
  const { number } = useParams<{ number: string }>()
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['post', number],
    queryFn: () => fetchPost(number!),
    enabled: !!number,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {(error as Error).message}</div>
  if (!post) return null

  return (
    <Container>
      <PostHeader>
        <Link to="/">← Voltar</Link>
        <h1>{post.title}</h1>
        <div>
          <span>{post.user.login}</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
          <span>{post.comments} comentários</span>
        </div>
      </PostHeader>
      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </Container>
  )
}
