import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit(true); // Pass true to show the sidebar
  }
}
