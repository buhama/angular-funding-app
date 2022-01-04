import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css'],
})
export class FormButtonsComponent implements OnInit {
  state!: string;
  @Output() btnClick = new EventEmitter();

  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
