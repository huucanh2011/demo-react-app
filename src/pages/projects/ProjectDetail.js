import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import ListTask from "../../components/tasks/TaskList";

function ProjectDetail() {
  const history = useHistory();
  const { projectId } = useParams();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h3 mr-2">Project 1</div>
        <div>
          <Button onClick={() => history.push("/")}>Back to list project</Button>
        </div>
      </div>

      <div>Due date: 2020-10-10</div>
      <div>Status: Doing</div>
      <div className="mb-3 font-weight-bold">List task</div>
      <ListTask />
    </>
  );
}

export default ProjectDetail;
