import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagementRoutingModule } from './management-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectModalComponent } from './modals/project-modal/project-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectModalComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class ManagementModule { }
