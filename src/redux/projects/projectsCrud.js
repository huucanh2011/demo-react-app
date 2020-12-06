import { getItemFromLocalStorage } from "../../services/LocalStorageService";

const localStorageKey = "projects";

export function getAllProjects() {
  return getItemFromLocalStorage(localStorageKey)
}
