import React from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function ProjectTable() {
  const history = useHistory();

  const handleShowProject = (projectId) => {
    history.push(`/projects/${projectId}`);
  };

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Due date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ cursor: "pointer" }} onClick={() => handleShowProject(1)}>
          <td>1</td>
          <td>Project 1</td>
          <td>2020-10-10</td>
          <td>Doing</td>
        </tr>
        <tr style={{ cursor: "pointer" }} onClick={() => handleShowProject(2)}>
          <td>2</td>
          <td>Project 2</td>
          <td>2020-11-11</td>
          <td>Doing</td>
        </tr>
        <tr style={{ cursor: "pointer" }} onClick={() => handleShowProject(3)}>
          <td>3</td>
          <td>Project 3</td>
          <td>2020-12-12</td>
          <td>Doing</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ProjectTable;
