import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { EVENTS } from 'src/app/mock-data';
import { Events } from 'src/app/interfaces/events';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() eventInfo!: Events;
  @Input() state!: string;
  @Output() btnClick = new EventEmitter();
  eventName!: string;
  eventDescription!: string;
  eventDate!: Date;
  audience!: number;
  bilingual!: boolean;
  accessibilityComments!: string;
  sustainabilityComments!: string;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {}

  onSubmit() {
    const newEvent = {
      id: EVENTS.length + 1,
      eventName: this.eventName,
      eventDescription: this.eventDescription,
      eventDate: 1,
      audience: this.audience,
      bilingual: this.bilingual,
      accessibilityComments: this.accessibilityComments,
      sustainabilityComments: this.sustainabilityComments,
    };

    this.eventsService.addEvent(newEvent);

    this.btnClick.emit('buttons');

    this.eventName = '';
    this.eventDescription = '';
    this.audience = 0;
    this.bilingual = false;
    this.accessibilityComments = '';
    this.sustainabilityComments = '';
  }
}
