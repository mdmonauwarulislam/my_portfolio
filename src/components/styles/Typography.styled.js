import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${(props) => (props.$dark ? "#e0e0e0" : "#6c757d")};
  margin-bottom: 1.5rem;
  font-size: ${(props) => props.$fontSize || "1.125rem"};
  letter-spacing: ${(props) => props.$spacing || "0.3px"};
  text-align: ${(props) => props.$textAlign};
  line-height: 1.8;
  font-weight: 400;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.$fontSizeMobile || "1rem"};
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.link};
  font-weight: 600;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    transform: scaleX(1);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-block;
  }
`;
