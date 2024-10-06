import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Profile } from '@components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { PostCard } from '@components/PostCard'
import { Container, PostList } from './styles'

interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

interface GitHubIssuesResponse {
  items: Post[]
}

const fetchPosts = async (query: string): Promise<Post[]> => {
  const { data } = await axios.get<GitHubIssuesResponse>(
    `https://api.github.com/search/issues?q=${query}+repo:samuel-cabral/github-blog`,
  )
  return data.items
}

export function Home() {
  const { data: posts = [], refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(''),
    initialData: [],
  })

  const handleSearch = async () => {
    await refetch()
  }

  return (
    <Container>
      <Profile />
      <SearchForm postsCount={posts.length} onSearch={handleSearch} />
      <PostList>
        {posts.map((post) => (
          <PostCard key={post.number} {...post} createdAt={post.created_at} />
        ))}
      </PostList>
    </Container>
  )
}
