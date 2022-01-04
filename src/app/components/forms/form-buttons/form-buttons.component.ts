import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css'],
})
export class FormButtonsComponent implements OnInit {
  state!: string;
  @Input() type!: string;
  text!: string;
  clickText!: string;
  @Output() btnClick = new EventEmitter();

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    if (this.type === 'editInfo') {
      this.text = 'Edit Info';
      this.clickText = 'editInfo';
    } else if (this.type === 'addEvent') {
      this.text = 'Add Event';
      this.clickText = 'event';
    } else if (this.type === 'addItem') {
      this.text = 'Add Item';
      this.clickText = 'item';
    }
  }

  onClick(newState: string) {
    this.btnClick.emit(newState);
  }
}
