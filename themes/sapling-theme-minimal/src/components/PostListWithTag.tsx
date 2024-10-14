import { Post } from '@saplingdao/types'
import PageTitle from './PageTitle'
import { PostList } from './PostList'
import { TagList } from './TagList'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface PostListWithTagProps {
  tagData: Record<string, number>
  posts: Post[]
  title: string
  initialDisplayPosts?: Post[]
  pagination?: PaginationProps
}

export function PostListWithTag({
  tagData = {},
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: PostListWithTagProps) {
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="flex flex-col">
      <PageTitle>Tags</PageTitle>
      <TagList tagData={tagData} title={title} />
      <div className="mt-10">
        <PostList posts={displayPosts} />
      </div>
    </div>
  )
}
