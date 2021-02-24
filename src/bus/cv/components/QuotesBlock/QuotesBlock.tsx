import React, { FC } from 'react'
import { QuotesContent } from './QuotesBlock.styled'

type QuotesProps = {
  text: string
}

export const QuotesBlock: FC<QuotesProps> = ({ text }) => (
  <QuotesContent>
    <p>
      {text}
    </p>
  </QuotesContent>
)
