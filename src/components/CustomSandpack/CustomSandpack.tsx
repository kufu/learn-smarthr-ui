import { Sandpack } from '@codesandbox/sandpack-react'

type CustomSandpackProps = {
  template: any
  filename: string
  children: string
}

export const CustomSandpack = (props: CustomSandpackProps) => {
  const { children, filename } = props
  return (
    <Sandpack
      template="react-ts"
      customSetup={{
        dependencies: {
          'smarthr-ui': 'latest',
          'styled-components': 'latest',
        },
      }}
      files={{
        [filename]: { code: children, hidden: false },
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        showTabs: true,
        closableTabs: false,
      }}
    />
  )
}
