import { Sandpack } from '@codesandbox/sandpack-react'

type CustomSandpackProps = {
  template: any
  filename: string
  packages: Array<Record<string, string>>
  children: string
}

export const CustomSandpack = (props: CustomSandpackProps) => {
  const { children, filename, packages = {} } = props
  return (
    <Sandpack
      template="react-ts"
      customSetup={{
        dependencies: {
          'smarthr-ui': 'latest',
          'styled-components': 'latest',
          ...packages,
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
