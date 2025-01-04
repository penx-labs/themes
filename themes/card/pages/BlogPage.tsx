import { Post } from '@penxio/types'
import { PageTitle } from '@/components/theme-ui/PageTitle'
import { PostList } from '../components/PostList'

interface Props {
  posts: Post[]
  initialDisplayPosts: Post[]
  pagination: {
    currentPage: number
    totalPages: number
  }
}

export function BlogPage({
  posts = [],
  pagination,
  initialDisplayPosts,
}: Props) {
  return (
    <div className="space-y-6">
      <PageTitle className="text-center">Blog</PageTitle>
      <PostList
        posts={posts}
        pagination={pagination}
        initialDisplayPosts={initialDisplayPosts}
      />
    </div>
  )
}