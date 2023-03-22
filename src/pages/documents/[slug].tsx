import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import { serialize } from 'next-mdx-remote/serialize'

import { MDXComponents } from '../../components/MDXComponents'

type Props = {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: {
    title: string
  }
}

const Post = ({ mdxSource, frontMatter }: Props) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <main>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </main>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('documents'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug
  const markdownWithMeta = fs.readFileSync(path.join('documents', slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, { scope: frontMatter })

  return {
    props: {
      mdxSource,
      frontMatter,
    },
  }
}
