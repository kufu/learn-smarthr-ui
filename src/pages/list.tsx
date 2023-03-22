import { GetStaticProps } from 'next'
import Link from 'next/link'

import { PostData, getSortedPostsData } from '../libs/mdxUtils'

interface ArchiveProps {
  allPostsData: PostData[]
}

export default function Archive({ allPostsData }: ArchiveProps) {
  return (
    <div>
      <h1>アーカイブ</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`} passHref>
              {title}
            </Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
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
