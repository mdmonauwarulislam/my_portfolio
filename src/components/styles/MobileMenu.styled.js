import styled from "styled-components";
import { Link as MobileMenuNavLink } from "react-scroll";
import { RiCloseLine as closeIcon } from "react-icons/ri";

export const MobileMenuContainer = styled.div`
  z-index: 9999;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background: linear-gradient(135deg, #0a0b0d 0%, #1a1d2e 100%);
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 10;
  padding: 0.5rem;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 1.5rem;
    right: 1.5rem;
  }
`;

export const CloseIcon = styled(closeIcon)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: rotate(90deg);
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const CloseText = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const MobileMenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 2.5rem;
  padding: 5rem 2rem;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 2rem;
    padding: 4rem 1.5rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 1.5rem;
    padding: 4rem 1rem;
  }
`;

export const MobileMenuLink = styled(MobileMenuNavLink)`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2.5rem;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  position: relative;
  text-align: center;
  word-wrap: break-word;
  max-width: 90vw;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.5rem;
  }
`;

export const MobileButton = styled.a`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: capitalize;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-top: 1rem;
  max-width: 90vw;
  box-sizing: border-box;

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
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.875rem 1.75rem;
    font-size: 0.85rem;
  }
`;

export const MobileSocials = styled.div`
  position: fixed;
  bottom: 2.5rem;
  right: 2rem;
  display: flex;
  gap: 1.5rem;
  z-index: 10;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 2rem;
    right: 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    bottom: 1.5rem;
    right: 1rem;
    gap: 0.75rem;
  }
`;

export const MobileSocial = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85rem;
  }
`;

export const MobileQuote = styled.span`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-style: italic;
  position: fixed;
  bottom: 2.5rem;
  left: 2rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 200px;
  z-index: 10;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 2rem;
    left: 1.5rem;
    font-size: 0.75rem;
    max-width: 150px;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    bottom: 1.5rem;
    left: 1rem;
    font-size: 0.7rem;
    max-width: 120px;
  }
`;
