import fs from 'fs'
import path from 'path'

import { GetStaticProps } from 'next'
import { BaseColumn, WarningIcon } from 'smarthr-ui'

import { TextLink } from '@/features/ui'

type Post = {
  title: string
  description?: string
  slug: string
}

const Archive: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main>
      <h1>（仮）SmartHR UI を学ぼう</h1>
      <p>ようこそ! ここは SmartHR UI の使い方を学ぶためのドキュメントサイトです。</p>

      <h2>SmartHR UI について</h2>
      <p>
        SmartHR UI は、SmartHR が開発した、React ベースの UI コンポーネントライブラリです。このライブラリには、一般的な UI
        要素だけでなく、業務アプリケーションに特化したコンポーネントも含まれています。開発者はこれらのコンポーネントを組み合わせることで、短期間で複雑な業務アプリケーションを構築できます。
      </p>

      <ul>
        <li>
          <TextLink href="https://smarthr.design/products/components/">コンポーネント｜SmartHR Design System</TextLink>
        </li>
        <li>
          <TextLink href="https://github.com/kufu/smarthr-ui">SmartHR UI｜GitHub - kufu/smarthr-ui</TextLink>
        </li>
      </ul>

      <h2>このサイトの目的</h2>

      <p>
        このサイトでは、SmartHR UI
        を使った画面の作り方を、実際にブラウザの上で手を動かしながら学べます。ちょっとした見た目の変更から複雑なレイアウト構築まで少しずつ解説します。
      </p>

      <p>
        最後まで読み進めることで、SmartHR UI
        を使って画面を作るために必要な知識をすべて身につけることができるでしょう。
      </p>

      <BaseColumn>
        <p>
          <WarningIcon text="このサイトは HTML や CSS、JavaScript、React の基礎的な知識を前提としています。" />
        </p>
      </BaseColumn>

      <h2>目次</h2>
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
