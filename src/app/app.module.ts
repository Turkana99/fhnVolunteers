import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VolunteersListComponent } from './components/volunteers-list/volunteers-list.component';
import { AddNewVolunteersComponent } from './components/add-new-volunteers/add-new-volunteers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { MaterialModule } from './material.module';
import { SidebarService } from './services/sidebar.service';
import { LangSkillsService } from './services/langSkills.service';
import { ProgramSkillsService } from './services/program-skills.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VolunteersListComponent,
    AddNewVolunteersComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}},
    AuthService,
    AuthGuard,
    SidebarService,
    LangSkillsService,
    ProgramSkillsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
