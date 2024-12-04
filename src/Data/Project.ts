import { atom } from "recoil";
import { ProjectInterface } from "./Projectinterface";

// Define the type for the atom's state
type ProjectPopupStateType = boolean | ProjectInterface;

// Create the atom
export const ProjectPopupState = atom<ProjectPopupStateType>({
  key: "ProjectPopup", 
  default: false, 
});

