import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Button } from 'smarthr-ui'

import { PostData, getSortedPostsData } from '../libs/mdxUtils'

interface ArchiveProps {
  allPostsData: PostData[]
}

export default function Archive({ allPostsData }: ArchiveProps) {
  return (
    <main>
      <h1>LEARN SmartHR QUICK START</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/documents/${id}`} passHref>
              {title}
            </Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </main>
  )
}

export const getStaticProps: GetStaticProps<ArchiveProps> = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
