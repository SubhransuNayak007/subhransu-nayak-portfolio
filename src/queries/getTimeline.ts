import { TimelineItem } from '../types';
import { staticTimeline } from '../data/staticData';

export async function getTimeline(): Promise<TimelineItem[]> {
  return staticTimeline;
}
