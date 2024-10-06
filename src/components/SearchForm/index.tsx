import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Container, Input, SearchInfo, ErrorMessage } from './styles'

const searchFormSchema = z.object({
  query: z.string().min(3, 'A busca deve ter pelo menos 3 caracteres'),
})

type SearchFormData = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  postsCount: number
  onSearch: (query: string) => void
}

export function SearchForm({ postsCount, onSearch }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  const onSubmit = (data: SearchFormData) => {
    onSearch(data.query)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <SearchInfo>
        <h2>Publicações</h2>
        <span>{postsCount} publicações</span>
      </SearchInfo>
      <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      {errors.query && <ErrorMessage>{errors.query.message}</ErrorMessage>}
    </Container>
  )
}
