import { GetStaticProps } from 'next'
import Link from 'next/link'

import { PostData, getAllPostsData } from '../libs/mdxUtils'

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
            <Link href={`/getting-started/${id}`} passHref>
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
  const allPostsData = getAllPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
