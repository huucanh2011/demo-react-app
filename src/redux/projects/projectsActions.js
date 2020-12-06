import * as requestFromServer from './projectsCrud'
import { projectsSlice } from './projectsSlice'

const { actions } = projectsSlice

export const fetchProjects = () => dispatch => {
  dispatch(actions.startCall())
  const data = requestFromServer.getAllProjects()
  dispatch(actions.projectsFetched(data))
}