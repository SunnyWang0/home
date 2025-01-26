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

const Project = ({ heading, username, length, specfic }) => {
  const [projectsArray, setProjectsArray] = useState([]);
  const [projectsLength] = useState(length);

  const fetchData = useCallback(async () => {
    const repoList = [];
    try {
      // getting all repos
      const response = await axios.get(
        `${API}/users/${username}/repos?sort=updated&direction=desc`
      );
      // slicing to the length
      const repos = [...response.data];
      const specificRepos = [];
      
      // adding specified repos
      for (let repoName of specfic) {
        try {
          const response = await axios.get(`${API}/repos/${username}/${repoName}`);
          specificRepos.push(response.data);
        } catch (error) {
          console.error(error.message);
        }
      }
      
      // adding filtered repos
      for (let repo of repos) {
        if (repoList.length < projectsLength - specfic.length) {
          if (!specfic.includes(repo.name)) {
            repoList.push(repo);
          }
        }
      }
      
      // adding to project array
      setProjectsArray([...specificRepos, ...repoList]);
    } catch (error) {
      console.error(error.message);
    }
  }, [projectsLength, specfic, username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : null}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
