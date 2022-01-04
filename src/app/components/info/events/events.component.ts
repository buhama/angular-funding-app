import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EVENTS } from 'src/app/mock-data';
import { Events } from 'src/app/interfaces/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Events[] = [];
  @Output() editClick = new EventEmitter();

  constructor(private eventsService: EventsService) {}

  onClick(event: Events) {
    console.log('wtf');
    this.eventsService.selectEvent(event);
    this.editClick.emit();
  }

  ngOnInit(): void {
    this.events = EVENTS;
  }
}
