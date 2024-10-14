import prisma from '@/lib/prisma'
import { unstable_cache } from 'next/cache'
import { PostStatus } from './constants'

export async function getPosts() {
  return await unstable_cache(
    async () => {
      return prisma.post.findMany({
        where: {
          status: PostStatus.PUBLISHED,
        },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })
    },
    [`posts`],
    {
      revalidate: 900,
      tags: [`posts`],
    },
  )()
}

export async function getPost(slug: string) {
  return await unstable_cache(
    async () => {
      const data = await prisma.post.findFirst({
        where: {
          slug,
        },
      })

      if (!data) return null

      return { ...data }
    },
    [`post-${slug}`],
    {
      revalidate: 900, // 15 minutes
      tags: [`posts-${slug}`],
    },
  )()
}
