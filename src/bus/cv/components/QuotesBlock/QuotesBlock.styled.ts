import styled from 'styled-components'
import openQuotes from '../../../../assets/images/open-quote.svg'
import closeQuotes from '../../../../assets/images/close-quote.svg'

export const QuotesContent = styled.div`
  width: 100%;
  min-height: 100px;
  text-align: center;
  padding: 1rem;

  p {
    position: relative;
  }

  p::before {
    content: '';
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    left: -1.25rem;
    top: -1.25rem;
    background-image: url(${openQuotes});
  }
  p::after {
    content: '';
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    right: -1.25rem;
    bottom: -1.25rem;
    background-image: url(${closeQuotes});
  }
`
