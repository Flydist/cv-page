import React, { FC, useEffect } from 'react'
import Prism from 'prismjs'
import './prism.css'
import { CodeBlock } from './SampleCode.styled'

const code = `
<div class='golden-grid'>
    <div style='grid-area:
              11 /  1 / span 10 / span
              12;'>
    </div>
</div>
`.trim()

export const SampleCode: FC = () => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <CodeBlock>
      <pre className="line-numbers">
        <code className="language-markup">{code}</code>
      </pre>
    </CodeBlock>
  )
}
