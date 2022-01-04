import { ClubInfo } from './interfaces/club-info';
import { Events } from './interfaces/events';

export const CLUBINFO: ClubInfo = {
  clubName: '',
  clubEmail: '',
  clubID: -1,
};

export const EVENTS: Events[] = [
  {
    id: 1,
    eventName: 'test event',
    eventDescription: 'test description',
    eventDate: Date.now(),
    audience: 12,
    bilingual: true,
    accessibilityComments: 'accessibility comments',
    sustainabilityComments: 'sustainability comments',
  },
];
