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
  @Input() state!: string;
  @Output() btnClick = new EventEmitter();
  @Output() onAddInfo: EventEmitter<ClubInfo> = new EventEmitter();
  clubEmail!: string;
  clubName!: string;
  clubID!: number;
  showForm: boolean = true;

  constructor(private clubInfoService: ClubInfoService) {}

  ngOnInit(): void {
    console.log('state ' + this.state);
  }

  onSubmit() {
    const newInfo = {
      clubName: this.clubName,
      clubEmail: this.clubEmail,
      clubID: this.clubID,
    };

    this.clubInfoService.addInfo(newInfo);

    this.clubName = '';
    this.clubEmail = '';
    this.clubID = 0;

    this.showForm = false;

    this.btnClick.emit('buttons');
  }
}
