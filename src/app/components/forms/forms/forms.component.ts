import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  state: string = this.stateService.getState();

  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  onBtnClick(): void {
    this.state = this.stateService.toggleState('event');
  }
}
