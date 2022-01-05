import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsComponent } from './components/forms/forms/forms.component';
import { ClubInfoComponent } from './components/info/club-info/club-info.component';
import { ClubInfoFormComponent } from './components/forms/club-info-form/club-info-form.component';
import { FormButtonsComponent } from './components/forms/form-buttons/form-buttons.component';
import { EventFormComponent } from './components/forms/event-form/event-form.component';
import { EventsComponent } from './components/info/events/events.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ClubInfoComponent,
    ClubInfoFormComponent,
    FormButtonsComponent,
    EventFormComponent,
    EventsComponent,
    MainSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
