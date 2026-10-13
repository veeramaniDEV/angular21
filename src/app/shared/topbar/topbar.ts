import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-topbar',standalone:true,imports:[RouterLink],templateUrl:'./topbar.html',styleUrl:'./topbar.css'})
export class Topbar { @Input() menuOpen=false; @Output() menuToggle=new EventEmitter<void>(); readonly profileOpen=signal(false); readonly query=signal(''); toggleProfile(){this.profileOpen.update(v=>!v)} }
