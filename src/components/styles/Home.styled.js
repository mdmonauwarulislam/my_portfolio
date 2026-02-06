import styled from "styled-components";

export const StyledHome = styled.section`
  background: linear-gradient(135deg, #0a0b0d 0%, #1a1d2e 100%);
  color: ${({ theme }) => theme.color.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8rem;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
    bottom: -100px;
    left: -100px;
    pointer-events: none;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: 0 2.5rem;
    text-align: center;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1.5rem;
    min-height: 100vh;
    height: auto;
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
`;

export const Name = styled.h2`
  font-size: 3.25rem;
  position: relative;
  color: ${({ theme }) => theme.color.accent};
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.25rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
    letter-spacing: 1.5px;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.35rem;
    letter-spacing: 1px;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0.5rem 0 1.5rem 0;
  color: #ffffff;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    font-size: 3rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.5rem;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const Line = styled.hr`
  width: 5rem;
  position: absolute;
  bottom: 6rem;
  background: ${({ theme }) => theme.backgroundColor.orange};
  border: none;
  height: 0.125rem;
  border-radius: 2.8125rem;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Greeting = styled.p`
  position: absolute;
  bottom: 3rem;
  font-size: 1rem;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  position: absolute;
  right: 5rem;
  bottom: 3rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Social = styled.a`
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  color: ${({ theme }) => theme.color.light};

  &:hover {
    transform: translateY(-0.3125rem);
    color: ${({ theme }) => theme.backgroundColor.orange};
  }

  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: -1rem;
    top: 50%;
    height: 0.5rem;
    width: 0.5rem;
    background: ${({ theme }) => theme.backgroundColor.orange};
    border-radius: 2.8125rem;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const Quote = styled.span`
  position: absolute;
  right: 25%;
  bottom: 30%;
  color: #94929d;
  font-size: 0.625rem;
  letter-spacing: 0.125rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
