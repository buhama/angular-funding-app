import { Injectable } from '@angular/core';
import { ClubInfo } from '../interfaces/club-info';
import { CLUBINFO } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class ClubInfoService {
  constructor() {}

  getClubInfo(): ClubInfo {
    return CLUBINFO;
  }
}
