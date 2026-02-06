import styled from "styled-components";
import { Link as Button } from "react-scroll";

export const StyledButton = styled(Button)`
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: 12px;
  font-weight: 600;
  height: 3.25rem;
  line-height: 3.25rem;
  font-size: 0.95rem;
  text-transform: capitalize;
  color: #fff;
  padding: 0 2.5rem;
  outline: none !important;
  overflow: hidden;
  display: inline-block;
  position: relative;
  letter-spacing: 0.5px;
  border: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  background: ${(props) => 
    props.$secondary 
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      : "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    max-width: 300px;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.9rem;
    padding: 0 2rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.85rem;
    padding: 0 1.75rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85em;
    padding: 0 2.1875rem;
  }

  &::before {
    content: ${(props) => `url(${props.$icon})`};
    font: 0.9375rem/1.2em font;
    color: #fff;
    position: absolute;
    height: 100%;
    right: 1.5625rem;
    top: 50%;
    margin-top: -0.5625rem;
    transition: all 0.3s;
    opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
    -webkit-transform: translateX(-1.25);
    transform: translateX(-1.25);
  }

  &:hover:before {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  & span {
    position: relative;
    display: block;
    transition: all 0.3s;
  }

  &:hover span {
    -webkit-transform: translateX(-0.625rem);
    transform: translateX(-0.625rem);
  }
`;
