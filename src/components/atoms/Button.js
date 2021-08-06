import styled from '@emotion/styled';
import { keyframes, css} from '@emotion/react'


const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;


export const Button = styled.button`
     appearance: none;
      position: relative;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      z-index: 0;
      text-align: center;
      text-decoration: none;
      line-height: 38px;
      white-space: nowrap;
      font-weight: 500;
      min-width: 170px;
      padding: 4.8px 25px;
      border-radius: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      font-size: 1rem;
      flex-shrink: 0;
      margin: 0px;
      color: #fff;
      background-color: #000;
      border: 1px solid #000; 
      transition: all 0.2s ease 0s;
      user-select: none;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      box-sizing: border-box;
      box-shadow: 0 0 15px 10px rgb(0 0 0 / 5%);
      -webkit-tap-highlight-color: transparent;
      text-transform: uppercase;
  &:hover{
    background: #100c08;
    color: #fff; 
  }
  ${({ loading }) =>
 loading &&
 css`
   color: transparent !important;
   pointer-events: none;
   position: relative;
   outline: none;
   &::after {
     content: '';
     animation: ${rotate} 550ms infinite linear;
     border: 2px solid #fff;
     border-radius: 50%;
     border-right-color: transparent !important;
     border-top-color: transparent !important;
     height: 1.1em;
     width: 1.1em;
     position: absolute;
     left: calc(50% - (1.2em / 2));
     top: calc(50% - (1.5em / 2));
   }
 `}
`