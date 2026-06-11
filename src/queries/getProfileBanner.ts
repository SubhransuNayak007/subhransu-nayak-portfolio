import { ProfileBanner } from '../types';
import { staticProfileBanner } from '../data/staticData';

export async function getProfileBanner(profileName: string = 'recruiter'): Promise<ProfileBanner> {
  const name = ['recruiter', 'developer', 'stalker', 'adventure'].includes(profileName) ? profileName : 'recruiter';
  return staticProfileBanner[name];
}
