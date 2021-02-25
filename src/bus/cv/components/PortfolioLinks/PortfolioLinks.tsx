import React, { FC } from 'react'
import { ListLink, StringsList } from '../../../../components/Common.styled'
import { infoLinks } from '../../../../constants/constants'

export const PortfolioLinks: FC = () => (
  <StringsList>
    {infoLinks.map((link) => (
      <li key={`${link.id}`}>
        <ListLink href={link.link}>{link.text}</ListLink>
      </li>
    ))}
  </StringsList>
)
