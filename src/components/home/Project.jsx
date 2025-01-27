import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
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

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {customProjects && customProjects.map((project, index) => (
            <ProjectCard key={`custom-project-${index}`} value={project} />
          ))}
          {projectsArray && projectsArray.map((project, index) => (
            <ProjectCard key={`github-project-${index}`} value={project} />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
