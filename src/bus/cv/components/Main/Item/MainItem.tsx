import React, { FC, ReactNode } from 'react'
import { ItemBlock, ItemHeader } from './MainItem.styled'

type ItemProps = {
  itemHeader?: string
  children?: ReactNode
}

export const MainItem: FC<ItemProps> = ({ itemHeader, children }) => (
  <ItemBlock>
    {itemHeader && <ItemHeader>{itemHeader}</ItemHeader>}
    {children}
  </ItemBlock>
)
