import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic, customProjects }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      if (specfic.length > 0) {
        // Fetch specific repos
        const promises = specfic.map((repo) =>
          axios.get(`https://api.github.com/repos/${username}/${repo}`)
        );
        const responses = await Promise.all(promises);
        return setProjectsArray(responses.map((response) => response.data));
      }
      
      if (length > 0) {
        // Fetch latest repos
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
        );
        return setProjectsArray(response.data.slice(0, length));
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [length, specfic, username]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  // Function to chunk array into groups of 2
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Combine custom projects and GitHub projects
  const allProjects = [...(customProjects || []), ...(projectsArray || [])];
  // Split projects into pairs for the carousel
  const projectPairs = chunkArray(allProjects, 2);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Carousel
          interval={null}
          indicators={true}
          controls={true}
          className="project-carousel"
        >
          {projectPairs.map((pair, index) => (
            <Carousel.Item key={`slide-${index}`}>
              <Row>
                {pair.map((project, projectIndex) => (
                  <Col md={6} key={`project-${index}-${projectIndex}`}>
                    <ProjectCard value={project} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Jumbotron>
  );
};

export default Project;
