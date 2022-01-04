import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state: string = 'addInfo';

  constructor() {}

  toggleState(newState: string): string {
    this.state = newState;
    return this.state;
  }

  getState(): string {
    return this.state;
  }
}
