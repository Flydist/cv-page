import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  span {
    font-size: 0.875rem;
    margin: 0 1rem 0.5rem 0;
    color: rgba(255, 0, 0, 1);
    width: auto;
  }
`

type StringsListType = {
  fw?: number
}
export const StringsList = styled.ul<StringsListType>`
  padding: 0;
  margin-left: 0;
  list-style: none;

  li {
    margin: 0.5rem 0;
    font-weight: ${({ fw }) => fw};
  }

  li::before {
    content: '—';
    position: relative;
    left: -5px;
  }
`
export const ListLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;

  :hover {
    text-decoration: none;
    color: rgba(235, 87, 87, 1);
    cursor: pointer;
    border-bottom: none;
  }
`
