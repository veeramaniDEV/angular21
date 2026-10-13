import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../../shared/topbar/topbar';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';
@Component({ selector:'app-landing-layout',standalone:true,imports:[RouterOutlet,Topbar,Sidebar,Footer],templateUrl:'./landing-layout.html',styleUrl:'./landing-layout.css' })
export class LandingLayout {
  readonly sidebarOpen = signal(false);
  toggleSidebar(){this.sidebarOpen.update(v=>!v)}
  closeSidebar(){this.sidebarOpen.set(false)}
  @HostListener('document:keydown.escape') onEscape(){this.closeSidebar()}
}
