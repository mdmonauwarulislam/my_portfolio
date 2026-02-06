import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.$mb || "4rem"};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  position: relative;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color: ${(props) => (props.$dark ? "#ffffff" : "#1a1d2e")};
  display: inline-block;
  letter-spacing: -1px;

  &::after {
    position: absolute;
    content: "${(props) => props.$number}";
    left: 5%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) =>
      props.$dark ? "rgba(255, 255, 255, 0.05)" : "rgba(26, 29, 46, 0.05)"};
    z-index: -1;
    font-size: 9rem;
    font-weight: 900;

    @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 7rem;
    }
    
    @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 5rem;
    }
    
    @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 4rem;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;
