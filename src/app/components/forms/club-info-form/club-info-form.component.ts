import { Component, OnInit } from '@angular/core';
import { ClubInfoService } from 'src/app/services/club-info.service';
import { ClubInfo } from 'src/app/interfaces/club-info';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-club-info-form',
  templateUrl: './club-info-form.component.html',
  styleUrls: ['./club-info-form.component.css'],
})
export class ClubInfoFormComponent implements OnInit {
  @Input() clubInfo!: ClubInfo;
  @Output() onAddInfo: EventEmitter<ClubInfo> = new EventEmitter();
  clubEmail!: string;
  clubName!: string;
  clubID!: number;

  constructor(private clubInfoService: ClubInfoService) {}

  ngOnInit(): void {}

  onSubmit() {
    alert('submitting');

    const newInfo = {
      clubName: this.clubName,
      clubEmail: this.clubEmail,
      clubID: this.clubID,
    };

    this.clubInfoService.addInfo(newInfo);

    this.clubName = '';
    this.clubEmail = '';
    this.clubID = 0;
  }
}
