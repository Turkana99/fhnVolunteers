import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService,private authService: AuthService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }


  logout() {
    // Perform login logic
    this.authService.logout();
  }

}
