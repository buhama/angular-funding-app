import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsComponent } from './components/forms/forms/forms.component';
import { ClubInfoComponent } from './components/info/club-info/club-info.component';
import { ClubInfoFormComponent } from './components/forms/club-info-form/club-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ClubInfoComponent,
    ClubInfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
