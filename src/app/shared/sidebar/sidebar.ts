
import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import {
    RouterLink,
    RouterLinkActive
} from '@angular/router';

interface MenuItem {
    label: string;
    icon: string;
    route: string;
}

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        TooltipModule
    ],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class Sidebar {
    @Input() collapsed = false;

    @Output() menuSelected = new EventEmitter<void>();

    readonly menuItems: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            route: '/app/dashboard'
        },
        {
            label: 'Analytics',
            icon: 'pi pi-chart-bar',
            route: '/app/analytics'
        },
        {
            label: 'Processes',
            icon: 'pi pi-sitemap',
            route: '/app/processes'
        },
        {
            label: 'Transitions',
            icon: 'pi pi-arrow-right-arrow-left',
            route: '/app/transitions'
        },
        {
            label: 'Tickets',
            icon: 'pi pi-ticket',
            route: '/app/tickets'
        },
        {
            label: 'File Manager',
            icon: 'pi pi-folder',
            route: '/app/file-manager'
        },
        {
            label: 'Billing',
            icon: 'pi pi-wallet',
            route: '/app/billing'
        },
        {
            label: 'Teams',
            icon: 'pi pi-users',
            route: '/app/teams'
        },
        {
            label: 'Performance Score',
            icon: 'pi pi-chart-line',
            route: '/app/performance-score'
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            route: '/app/settings'
        }
    ];
}
