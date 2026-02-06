import styled from "styled-components";
import arrowUp from "../../assets//icons/icon-arrow-up.svg";

export const StyledFooter = styled.footer`
  background: linear-gradient(180deg, #0a0b0d 0%, #1a1d2e 100%);
  color: ${({ theme }) => theme.color.lightGray};
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%);
    top: -300px;
    left: -200px;
    pointer-events: none;
  }
`;

export const FooterSmallTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSmallTitle = styled.span`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -8%;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    height: 6px;
    width: 6px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
`;

export const FooterBigLinkContainer = styled.div`
  text-align: center;
  margin: 3.5rem 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 2rem 0;
  }
`;

export const FooterBigLink = styled.a`
  font-size: 5.5rem;
  font-weight: 800;
  position: relative;
  width: 100%;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -0.5rem;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.8rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 2.2rem;
  }
`;

export const FooterContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  margin-top: 6rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
`;

export const FooterContact = styled.div`
  position: relative;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-bottom: 1.5rem;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 60px;
      background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
      bottom: -1px;
      left: 0;
      border-radius: 2px;
    }
  }
`;

export const ContactHeader = styled.p`
  font-size: 1.125rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 0 0.75rem 0;
    font-size: 1rem;
  }
`;

export const ContactLink = styled.a`
  font-size: 1.125rem;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -2px;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const FooterSocials = styled.span`
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.75rem;
  }
`;

export const FooterArrowLine = styled.div`
  position: relative;
`;

export const FooterLine = styled.hr`
  margin-top: 4rem;
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
`;

export const ArrowToTop = styled.div`
  height: 64px;
  width: 64px;
  background: rgba(255, 255, 255, 0.05);
  background-image: url(${arrowUp});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 12px 18px;
  position: absolute;
  right: 0;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    background-image: url(${arrowUp});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12px 18px;
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &::before {
    content: "";
    display: block;
    width: 2px;
    height: 4rem;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
    position: absolute;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &::after {
    content: "back to top";
    display: block;
    width: 150px;
    font-size: 0.75rem;
    line-height: 32px;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(-90deg);
    transform-origin: left bottom;
    position: absolute;
    left: calc(32px + 20px);
    top: -140px;
    pointer-events: none;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::before,
    &::after {
      display: none;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 48px;
    width: 48px;
    background-size: 10px 14px;
    
    &:hover {
      background-size: 10px 14px;
    }
  }
`;

export const Copyright = styled.div`
  padding-top: 2.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 1.5rem;
    font-size: 0.85rem;
  }
`;

export const Small = styled.a`
  color: ${({ theme }) => theme.color.accent};
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: #ff8555;
  }
`;
