import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
import { ProjectModalComponent } from '../../modals/project-modal/project-modal.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor(
    private modalService: NgbModal,    
  ) { }

  ngOnInit(): void {
  }

  public createProject(){
    this.openProjectModal('create');
  }
  public editProject(project: any){
    this.openProjectModal('edit', project);
  }

  private openProjectModal(action: string, project?:any){
    const ref = this.modalService.open(ProjectModalComponent, {
      centered: true,
      backdrop: false
    });
    ref.componentInstance.action = action;
    ref.componentInstance.project = project;
    ref.closed.subscribe( res => console.log(res) );
  }

  openDeleteProjectModal(project: any){
    const ref = this.modalService.open(ConfirmModalComponent, {
      centered: true,
      backdrop: false,
    });
    ref.componentInstance.title = `¿ Eliminar proyecto ${project} ?`;
    ref.componentInstance.message = 'No podrá deshacer esta acción';
    ref.closed.subscribe( res => console.log(res) );
  }

}
