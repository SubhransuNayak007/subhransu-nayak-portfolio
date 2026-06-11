import { WorkPermit } from '../types';
import { staticWorkPermit } from '../data/staticData';

export async function getWorkPermit(): Promise<WorkPermit> {
  return staticWorkPermit;
}
