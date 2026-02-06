import React, { useEffect } from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../styles/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <MobileMenuContainer $isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseText>Close</CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Projects
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileMenuLink to="playground" onClick={toggle}>
          Playground
        </MobileMenuLink>
        <MobileButton
          href="mailto:mdmonauwarulislam@gmail.com "
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              get in touch
            </span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="mailto:mdmonauwarulislam@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gm
        </MobileSocial>
        <MobileSocial
          href="https://github.com/mdmonauwarulislam"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gh
        </MobileSocial>

        <MobileSocial
          href="https://www.linkedin.com/in/mdmonauwarulislam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ln
        </MobileSocial>
      </MobileSocials>
      <MobileQuote>For Work</MobileQuote>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
