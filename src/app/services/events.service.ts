import { Injectable } from '@angular/core';
import { Events } from '../interfaces/events';
import { EVENTS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor() {}

  addEvent(newEvent: Events): void {
    EVENTS.push(newEvent);
    console.log(EVENTS);
  }
}
