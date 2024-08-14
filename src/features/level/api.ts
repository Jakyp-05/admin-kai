import { apiRoot } from "shared/api/api";
import { LevelObject} from "./type";

export const apiLevel = {
  getAllLevels: () => apiRoot.get<LevelObject[]>(`level/find/all`),

};