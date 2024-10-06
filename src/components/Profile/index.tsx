import { useQuery } from '@tanstack/react-query'
import {
  GithubIcon,
  BuildingIcon,
  UsersIcon,
  ArrowUpRightIcon,
} from 'lucide-react'
import { api } from '@lib/axios'
import {
  Container,
  ProfileInfo,
  ProfileImage,
  ProfileDetails,
  StyledLink,
  IconWrapper,
  Header,
} from './styles'

interface GitHubUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

const fetchUser = async (): Promise<GitHubUser> => {
  const { data } = await api.get<GitHubUser>('/users/samuel-cabral')
  return data
}

export function Profile() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {(error as Error).message}</div>
  if (!user) return null

  return (
    <Container>
      <ProfileImage src={user.avatar_url} alt={user.name} />
      <ProfileInfo>
        <Header>
          <h1>{user.name}</h1>
          <StyledLink
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
            <ArrowUpRightIcon size={16} />
          </StyledLink>
        </Header>
        <p>{user.bio}</p>
        <ProfileDetails>
          <span>
            <IconWrapper>
              <GithubIcon size={18} />
            </IconWrapper>
            {user.login}
          </span>
          <span>
            <IconWrapper>
              <BuildingIcon size={18} />
            </IconWrapper>
            {user.company}
          </span>
          <span>
            <IconWrapper>
              <UsersIcon size={18} />
            </IconWrapper>
            {user.followers} seguidores
          </span>
        </ProfileDetails>
      </ProfileInfo>
    </Container>
  )
}
