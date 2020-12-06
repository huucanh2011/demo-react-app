import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import DetailProject from "./pages/projects/ProjectDetail";
import ListProject from "./pages/projects/ProjectList";
import TaskDetail from "./pages/tasks/TaskDetail";

function Routes() {
  return (
    <Suspense fallback={"Loading..."}>
      <Switch>
        <Route exact path="/" component={ListProject} />
        <Route exact path="/projects/:projectId" component={DetailProject} />
        <Route
          exact
          path="/projects/:projectId/tasks/:taskId"
          component={TaskDetail}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
