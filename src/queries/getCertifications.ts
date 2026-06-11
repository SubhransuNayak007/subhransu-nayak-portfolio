import { Certification } from '../types';
import { staticCertifications } from '../data/staticData';

export async function getCertifications(): Promise<Certification[]> {
  return staticCertifications;
}
