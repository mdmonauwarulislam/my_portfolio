import styled from "styled-components";

export const StyledAbout = styled.section`
  background: linear-gradient(180deg, #0a0b0d 0%, #1a1d2e 100%);
  color: ${({ theme }) => theme.color.lightGray};
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    bottom: -200px;
    right: -200px;
    pointer-events: none;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 6.5rem;
  justify-content: center;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    margin-top: 4rem;
    gap: 3rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 3rem;
    gap: 2rem;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  width: 33%;
  height: 32rem;
  z-index: 3;
  border-radius: 16px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: -2;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: linear-gradient(180deg, transparent 0%, rgba(10, 11, 13, 0.3) 100%);
    z-index: 2;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: 28rem;
    margin-bottom: 0;

    &::after {
      top: -1rem;
      left: -1rem;
    }
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 24rem;
    
    &::after {
      top: -0.75rem;
      left: -0.75rem;
    }
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 20rem;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px;
  object-fit: cover;
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 50%;
  text-align: justify;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: left;
  }
`;

export const Resume = styled.div`
  display: inline-block;
  margin-top: 3rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -0.5rem;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    width: 100%;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 2rem;
  }
`;

export const ResumeLink = styled.a`
  color: #fff;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;

  &::before {
    content: ${(props) => `url(${props.$icon})`};
    position: absolute;
    right: -2rem;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;
