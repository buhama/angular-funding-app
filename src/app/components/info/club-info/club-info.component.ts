import { Component, OnInit } from '@angular/core';
import { ClubInfo } from 'src/app/interfaces/club-info';
import { ClubInfoService } from 'src/app/services/club-info.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-club-info',
  templateUrl: './club-info.component.html',
  styleUrls: ['./club-info.component.css'],
})
export class ClubInfoComponent implements OnInit {
  clubInfo!: ClubInfo;

  constructor(
    private clubInfoService: ClubInfoService,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.clubInfo = this.clubInfoService.getClubInfo();
  }

  editClick(): void {
    console.log('huh');
    console.log('yo ' + this.eventsService.getSelectedEvent().eventName);
  }
}
