import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { QueslistComponent } from '../../queslist/queslist.component';
import { AddsurgeryComponent } from '../../addsurgery/addsurgery.component';
import { ScheduleComponent } from '../../schedule/schedule.component';
import { PatientlistComponent } from '../../patientlist/patientlist.component';
import { DoctorlistComponent } from '../../doctorlist/doctorlist.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'queslist',
    //     component: QueslistComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'addsurgery',
    //         component: AddsurgeryComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'schedule',
    //         component: ScheduleComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'patientlist',
    //         component: PatientlistComponent
    //     }]
    // },
    // {
    //     path: '',
    //     children: [ {
    //         path: 'doctorlist',
    //         component: DoctorlistComponent
    //     }],
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'patient-list',     component: PatientlistComponent },
    { path: 'doctor-list',     component: DoctorlistComponent },
    { path: 'schedule',     component: ScheduleComponent },
    { path: 'add-surgery',     component: AddsurgeryComponent },
    { path: 'questionaaire',     component: QueslistComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
