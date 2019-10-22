import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/schedule', title: 'Scheduling',  icon:'calendar_today', class: '' },
    { path: '/doctor-list', title: 'Doctor List',  icon:'format_list_bulleted', class: '' },
    { path: '/patient-list', title: 'Patient List',  icon:'local_hotel', class: '' },
    { path: '/questionaaire', title: 'Questionaaire',  icon:'question_answer', class: '' },
   { path: '/add-surgery', title: 'Logs of surgeries',  icon:'content_paste', class: '' },
  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
