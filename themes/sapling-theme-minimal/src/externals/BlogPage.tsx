import { Post } from '@saplingdao/types'
import PageTitle from '../components/PageTitle'
import { PostList } from '../components/PostList'

interface Props {
  posts: Post[]
  tagData: Record<string, number>
  title: string
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
  tagData,
  title,
}: Props) {
  return (
    <div className="space-y-6">
      <PageTitle>Blog</PageTitle>
      <PostList
        posts={posts}
        pagination={pagination}
        initialDisplayPosts={initialDisplayPosts}
      />
    </div>
  )
}
