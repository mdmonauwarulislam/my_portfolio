import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html{
    scroll-behavior: smooth;
    max-width: 100vw;
    overflow-x: hidden;
    }

    body {
    font-size: 100%;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    background: ${({ theme }) => theme.backgroundColor.light};
    color: ${({ theme }) => theme.color.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    max-width: 100vw;
    }

    img {
    object-fit: cover;
    }

    li {
    list-style: none;
    }

    a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    section,
    footer{
    padding: 5rem 5rem 8rem 5rem;
    max-width: 100vw;
    overflow-x: hidden;

    @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 4rem 2.5rem 6rem 2.5rem;
    }
    
    @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 3rem 1.5rem 4rem 1.5rem;
    }
    }
`;

export default GlobalStyles;
