import styled from "styled-components";
import { Link as NavLink } from "react-scroll";

export const StyledNavbar = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  color: #fff;

  &.sticky {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(10, 11, 13, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    height: 4.5rem;
    z-index: 999;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2.5rem;
    height: 4.5rem;
  }
`;

export const NavLogo = styled.img`
  width: 15rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    opacity: 0.8;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 12rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 10rem;
  }
`;

export const NavMenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  flex: 1;
  margin-left: 8rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavList = styled.li``;

export const StyledNavLinks = styled(NavLink)`
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: capitalize;
  position: relative;
  font-weight: 600;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #ffffff;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    border-radius: 2px;
  }
`;

export const StyledCTA = styled.a`
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: capitalize;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  & span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
    z-index: 1;
  }

  & > span {
    overflow: hidden;
  }

  & > span > span {
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover > span > span {
    transform: translateY(-2px);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  display: none;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const Line = styled.div`
  height: 0.1125rem;
  width: ${(props) => props.$width || "2rem"};
  background: ${({ theme }) => theme.color.light};
  margin: 0.28125rem 0;
  transition: 0.3s ease;
  margin-left: ${(props) => props.$ml || "0"};
`;
