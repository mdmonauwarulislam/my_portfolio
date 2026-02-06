import styled, { css } from "styled-components";

export const HoverStyle = css`
  content: "";
  position: absolute;
  bottom: -0.3rem;
  right: 0;
  left: 0;
  width: 0;
  height: 0.7px;
  background: ${({ theme }) => theme.backgroundColor.light};
  transition: 0.3s ease-in-out;
`;

export const Flex = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledProjects = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  color: ${({ theme }) => theme.color.text};
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1.25rem;
    margin-top: 2.5rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

export const ProjectTransitionImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  position: absolute;
  transition: 0.3s ease;
`;

export const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5rem 3rem;
  color: #fff;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(13, 14, 14, 0.97),
    rgba(0, 0, 0, 0.9)
  );
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: 0.6s ease;
  margin-top: 2rem;
  z-index: 5;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 2rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 1.5rem;
  }
`;

export const ProjectTitle = styled.span``;

export const LinkName = styled.span``;

export const ProjectCodeLink = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 9rem;
  color: ${({ theme }) => theme.color.light};
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 7rem;
    bottom: 1.5rem;
    font-size: 13px;
  }
`;

export const ProjectLiveLink = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  color: ${({ theme }) => theme.color.light};
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 1.5rem;
    bottom: 1.5rem;
    font-size: 13px;
  }
`;

export const ProjectCard = styled.article`
  background: #ffffff;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: linear-gradient(180deg, transparent 0%, rgba(10, 11, 13, 0.05) 100%);
    z-index: 2;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  &:hover::after {
    background: linear-gradient(180deg, transparent 0%, rgba(10, 11, 13, 0.03) 100%);
  }

  &:hover ${ProjectDetails} {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  &:hover ${ProjectTransitionImage} {
    opacity: 1;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 380px;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 350px;
    border-radius: 12px;
  }
`;
