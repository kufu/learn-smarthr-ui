import fs from 'fs'
import path from 'path'

import { GetStaticProps } from 'next'

import { TextLink } from '@/features/ui'

type Post = {
  title: string
  description?: string
  slug: string
}

const Archive: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main>
      <h1>SmartHR UI</h1>
      <p>すべての “働く” を支えるためのコンポーネントライブラリ</p>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <TextLink href={`/getting-started/${slug}`}>{title}</TextLink>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Archive

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await getPosts()

  return {
    props: {
      posts,
    },
  }
}

const getPosts = async () => {
  const pagePath = 'pages/getting-started'
  const dirFiles = fs.readdirSync(path.join(process.cwd(), pagePath), { withFileTypes: true })
  const posts = (await Promise.all(
    dirFiles
      .map(async (file) => {
        if (!file.isFile() || !file.name.endsWith('.mdx')) return

        const slug = file.name.replace(/.mdx$/, '')
        const { meta } = await import(`${pagePath}/${file.name}`)

        return {
          ...meta,
          slug,
        }
      })
      .filter((post) => post),
  )) as Post[]

  return posts
}
