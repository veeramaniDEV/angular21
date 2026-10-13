import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface MenuItem {label:string;icon:string;route:string}
@Component({selector:'app-sidebar',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./sidebar.html',styleUrl:'./sidebar.css'})
export class Sidebar {
 @Output() menuSelected = new EventEmitter<void>();
 readonly menuItems:MenuItem[]=[
  {label:'Dashboard',icon:'pi pi-home',route:'/app/dashboard'},
  {label:'Analytics',icon:'pi pi-chart-bar',route:'/app/analytics'},
  {label:'Processes',icon:'pi pi-cog',route:'/app/processes'},
  {label:'Transitions',icon:'pi pi-sync',route:'/app/transitions'},
  {label:'Tickets',icon:'pi pi-file-edit',route:'/app/tickets'},
  {label:'File Manager',icon:'pi pi-folder',route:'/app/file-manager'},
  {label:'Billing',icon:'pi pi-credit-card',route:'/app/billing'},
  {label:'Teams',icon:'pi pi-users',route:'/app/teams'},
  {label:'Performance Score',icon:'pi pi-star',route:'/app/performance-score'},
  {label:'Settings',icon:'pi pi-cog',route:'/app/settings'}
 ];
}
