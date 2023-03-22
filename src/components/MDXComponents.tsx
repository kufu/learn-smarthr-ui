import { MDXProvider } from '@mdx-js/react'

export const MDXComponents = {
  // ここにカスタムコンポーネントを追加
  // 例: h1: (props) => <h1 style={{ color: 'red' }} {...props} />,
}

export const wrapMDX = (Page) => {
  return (props) => (
    <MDXProvider components={MDXComponents}>
      <Page {...props} />
    </MDXProvider>
  )
}
