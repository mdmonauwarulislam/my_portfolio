import styled from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";

export const LiveIcon = styled(BsArrowUpRightCircle)`
  transition: 0.3s ease-in-out;
`;

export const StyledPlayground = styled.section`
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  color: ${({ theme }) => theme.color.text};
`;

export const PlaygroundProjectContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 2.5rem;
    gap: 1.25rem;
  }
`;

export const LinkWrapper = styled.span`
  cursor: ${({ $hasLink }) => ($hasLink ? "pointer" : "not-allowed")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 0;
    transform: scaleX(1);
    display: block;
    height: 0.0625rem;
    background: ${({ theme }) => theme.backgroundColor.dark};
    transition: 0.3s ease-in-out;
  }
`;

export const PlaygroundImage = styled.img`
  height: 100%;
  width: 100%;
  transition: 0.3s ease;
`;

export const PlaygroundProjectWrapper = styled.article`
  cursor: ${({ $hasLink }) => ($hasLink ? "pointer" : "not-allowed")};
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: ${({ $hasLink }) => ($hasLink ? "translateY(-8px)" : "none")};
    box-shadow: ${({ $hasLink, theme }) => ($hasLink ? theme.shadows.hover : theme.shadows.small)};
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: 12px;
    
    &:hover {
      transform: ${({ $hasLink }) => ($hasLink ? "translateY(-4px)" : "none")};
    }
  }
`;

export const PlaygroundProject = styled.div`
  pointer-events: ${({ $hasLink }) => ($hasLink ? "all" : "none")};

  &:hover ${LiveIcon} {
    transform: ${({ $hasLink }) => ($hasLink ? "rotate(50deg)" : "none")};
  }

  &:hover ${LinkWrapper}::after {
    width: ${({ $hasLink }) => ($hasLink ? "80%;" : "0")};
  }

  &:hover ${PlaygroundImage} {
    transform: ${({ $hasLink }) => ($hasLink ? "scale(1.025)" : "0")};
  }
`;

export const PlaygroundProjectImageContainer = styled.a`
  cursor: ${({ $hasLink }) => ($hasLink ? "pointer" : "not-allowed")};
  width: 100%;
  height: 280px;
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 16px 16px 0 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 240px;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 220px;
    border-radius: 12px 12px 0 0;
  }
`;

export const PlaygroundProjectDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 0.5rem;
  width: 100%;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 0.75rem;
  }
`;

export const PlaygroundProjectName = styled.h2`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1rem;
  white-space: pre-line;
`;

export const PlayGroundProjectLive = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.9rem;

  cursor: ${({ $hasLink }) => ($hasLink ? "pointer" : "not-allowed")};
  pointer-events: ${({ $hasLink }) => ($hasLink ? "all" : "none")};
  text-decoration: ${({ $hasLink }) => ($hasLink ? "none" : "line-through")};
`;
