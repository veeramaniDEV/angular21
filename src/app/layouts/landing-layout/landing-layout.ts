
import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Topbar } from '../../shared/topbar/topbar';
import { Footer } from '../../shared/footer/footer';



@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterOutlet, Topbar, Sidebar, Footer],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css'
})
export class LandingLayout {

  readonly sidebarOpen = signal(false);
  readonly sidebarCollapsed = signal(false);

  toggleSidebar(): void {
    if (window.innerWidth >= 1024) {
      this.sidebarCollapsed.update(value => !value);
    } else {
      this.sidebarOpen.update(value => !value);
    }
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeSidebar();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.sidebarOpen.set(false);
    }
  }
}
