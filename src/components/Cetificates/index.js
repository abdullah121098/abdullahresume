import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
//   Divider,
} from "./CertificateStyle";
import ProjectCard from "../Cards/ProjectCards";
import { Certificate } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
         Here my extra course completed certificates.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "Certificate" ? (
            <ToggleButton
              active
              value="Certificate"
              onClick={() => setToggle("Certificate")}
            >
              CERTIFICATE'S
            </ToggleButton>
          ) : (
            <ToggleButton value="Certificate" onClick={() => setToggle("Certificate")}>
             CERTIFICATE'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            Certificate.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {Certificate
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
