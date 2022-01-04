import { Injectable } from '@angular/core';
import { Events } from '../interfaces/events';
import { EVENTS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor() {}

  selecetedEvent!: Events;

  addEvent(newEvent: Events): void {
    EVENTS.push(newEvent);
    console.log(EVENTS);
  }

  selectEvent(event: Events): void {
    this.selecetedEvent = event;
  }

  getSelectedEvent(): Events {
    return this.selecetedEvent;
  }
}
