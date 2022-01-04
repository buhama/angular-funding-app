import { Component, OnInit } from '@angular/core';
import { EVENTS } from 'src/app/mock-data';
import { Events } from 'src/app/interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Events[] = [];

  constructor() {}

  ngOnInit(): void {
    this.events = EVENTS;
  }
}
