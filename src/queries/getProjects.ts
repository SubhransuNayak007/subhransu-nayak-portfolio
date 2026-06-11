import { Project } from '../types';
import { staticProjects } from '../data/staticData';

export async function getProjects(): Promise<Project[]> {
  return staticProjects;
}
