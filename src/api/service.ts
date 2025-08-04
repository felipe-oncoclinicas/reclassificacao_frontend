import { getMockFiles, updateMockFile } from "../data/mockData";
import type { FileData } from "../types/FileData";


export const getFiles = () => getMockFiles();

export const updateFile = (id: number, data: Partial<FileData>) =>
  updateMockFile(id, data);