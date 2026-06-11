import { ContactMe } from '../types';
import { staticContactMe } from '../data/staticData';

export async function getContactMe(): Promise<ContactMe> {
  return staticContactMe;
}
