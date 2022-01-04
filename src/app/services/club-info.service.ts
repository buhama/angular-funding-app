import { Injectable } from '@angular/core';
import { ClubInfo } from '../interfaces/club-info';
import { CLUBINFO } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class ClubInfoService {
  constructor() {}

  private showClubInfoForm: boolean = true;

  getClubInfo(): ClubInfo {
    console.log('getting info');
    return CLUBINFO;
  }

  addInfo(newInfo: ClubInfo): void {
    CLUBINFO.clubName = newInfo.clubName;
    CLUBINFO.clubEmail = newInfo.clubEmail;
    CLUBINFO.clubID = newInfo.clubID;
    this.showClubInfoForm = false;
  }
}
