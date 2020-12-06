import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import TableProject from "../../components/projects/ProjectTable";
import { getAllProjects } from "../../redux/projects/projectsCrud";
import { saveToLocalStorage } from "../../services/LocalStorageService";

function ProjectList() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.projects, shallowEqual);
  console.log(`entities: `, entities);

  // useEffect(() => {
  //   dispatch(getAllProjects())
  // })

  const setInitData = () => {
    const projects = [
      {
        id: 1,
        name: 'Project 1',
        dueDate: '2020-01-01',
        status: 'FINISH'
      },
      {
        id: 2,
        name: 'Project 2',
        dueDate: '2020-02-02',
        status: 'NOT YET'
      },
      {
        id: 3,
        name: 'Project 3',
        dueDate: '2020-02-02',
        status: 'FAIL'
      },
    ]
    saveToLocalStorage('projects', projects)
  }

  return (
    <Card className="shadow">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
        <div className="h4 mr-2">List project</div>
        <div>
          <Button variant="success" onClick={setInitData}>Init data</Button>
        </div>
        </div>
      </Card.Header>
      <Card.Body>
        <TableProject projects={entities === null ? [] : entities} />
      </Card.Body>
    </Card>
  );
}

export default ProjectList;
