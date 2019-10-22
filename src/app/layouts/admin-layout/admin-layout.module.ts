import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TagInputModule } from 'ngx-chips';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ScheduleComponent } from '../../schedule/schedule.component';
import { AddsurgeryComponent } from '../../addsurgery/addsurgery.component';
import { PatientlistComponent } from '../../patientlist/patientlist.component';
import { DoctorlistComponent } from '../../doctorlist/doctorlist.component';
import { QueslistComponent } from '../../queslist/queslist.component';

import {
  MatButtonModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule, MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatExpansionModule,
  MatStepperModule

} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    DragDropModule,
    TagInputModule,
    MatExpansionModule,
    MatStepperModule


  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    MapsComponent,
    NotificationsComponent,
    ScheduleComponent,
    AddsurgeryComponent,
    PatientlistComponent,
    DoctorlistComponent,
    QueslistComponent
  ]
})

export class AdminLayoutModule {}
