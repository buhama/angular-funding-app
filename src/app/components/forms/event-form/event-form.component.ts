import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() state!: string;
  show: boolean = true;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.toggleState();
  }

  toggleState(): void {
    this.state = this.stateService.getState();
  }
}
