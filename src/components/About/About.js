import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg"
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/monauwarul_resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading $mb="3rem">
        <SectionTitle $dark={true} $number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Md Monauwarul Islam, a B.Tech graduate in Computer Science Engineering 
            from Maulana Azad National Urdu University, Hyderabad. I am a 
            Full-Stack Developer with hands-on backend development experience, working as a 
            Backend Developer Intern at WhatBytes, where I've optimized backend services and 
            improved system performance by 30%. I've also successfully delivered freelance 
            projects, building custom web solutions for various clients.
          </StyledParagraph>
          <StyledParagraph>
            I specialize in building scalable web applications and optimizing backend performance 
            using the MERN stack. My technical expertise includes React.js, Next.js, Redux Toolkit, 
            Node.js, Express.js, RESTful APIs, MongoDB, SQL, TypeScript, and modern development 
            tools like Git, Docker, Prisma ORM, Postman, and Firebase. I focus on creating 
            user-friendly applications with robust backend architecture, implementing efficient API 
            solutions, JWT authentication, and performance optimizations like Redis caching.
          </StyledParagraph>
          <StyledParagraph>
            With 200+ LeetCode problems solved and 10+ full-stack applications deployed, I have a 
            proven track record of delivering production-ready solutions. I'm passionate about 
            learning new technologies, sharing knowledge with fellow developers, and contributing 
            to innovative projects. Let's connect and build something amazing together!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              $icon={downloadIcon}
              download="Md_Monauwarul_Islam_Resume"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
