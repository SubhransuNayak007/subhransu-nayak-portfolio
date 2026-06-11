import { Skill } from '../types';
import { staticSkills } from '../data/staticData';

export async function getSkills(): Promise<Skill[]> {
  return staticSkills;
}
